const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
var showdown = require('showdown');

const processFilePath = (path_ = '') => {
  if (path_ !== '.' && path_ !== './') {
    if (path_.length && path_[0] === '/') return path_;

    if (path_.length > 2) {
      path_ = path_.substr(0, 2) === './' ? path_ : './' + path_;
    } else {
      throw new Error('Invalid file');
    }
  }

  return path_;
};

const getFilePath = (file_ = '') => {
  try {
    return path.resolve(__dirname, file_);
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {string} filePath
 * @param {number} depth
 * @example
 * filePath = '/sample_root_path/project/src/preprocessor/profile.js'
 * depth = 2  for `project` as root folder
 * returns: '/sample_root_path/project/'
 * @returns {string} returns the root folder path appended by the seperator.
 */
const getRootFolderPath = (filePath, depth = 0) => {
  const pathArr = filePath.split(path.sep);
  return `${pathArr.slice(0, pathArr.length - depth - 1).join(path.sep)}${
    path.sep
  }`;
};

const appendToRootFolder = (filePath, depth = 0) => {
  return `${getRootFolderPath(__dirname, depth - 1)}${path.normalize(
    filePath
  )}`;
};

const getJSONFromYAML = (relativeFilePath, depth) => {
  const filePath = appendToRootFolder(relativeFilePath, depth);
  const jsonObj = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
  return jsonObj;
};

const isValidUrl = (url) => {
  return RegExp(
    '^(?:(?:(?:https?|ftp):)?//)(?:S+(?::S*)?@)?(?:(?!(?:10|127)(?:.d{1,3}){3})(?!(?:169.254|192.168)(?:.d{1,3}){2})(?!172.(?:1[6-9]|2d|3[0-1])(?:.d{1,3}){2})(?:[1-9]d?|1dd|2[01]d|22[0-3])(?:.(?:1?d{1,2}|2[0-4]d|25[0-5])){2}(?:.(?:[1-9]d?|1dd|2[0-4]d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff].)+(?:[a-z\u00a1-\uffff]{2,}.?))(?::d{2,5})?(?:[/?#]S*)?$'
  ).test(url);
};

const isValidFilePath = (filePath, ext = 'md') => {
  return RegExp(`^[a-zA-Z0-9-_${path.sep}.]+.${ext}$`).test(filePath);
};

const isValidSlug = (slug) => {
  return RegExp(`^[a-zA-Z0-9-_/]+$`).test(slug);
};

const processProfileSummary = (jsonObj) => {
  let summary = jsonObj['basics']['summary']['value'];

  if (isValidFilePath(summary)) {
    let fileAbs = appendToRootFolder(`_profile/${summary}`, 2);
    try {
      fs.accessSync(fileAbs, fs.constants.F_OK);
      summary = fs.readFileSync(fileAbs, 'utf8');
    } catch (err) {
      // continue with what is stored in jsonObj['basics']['summary']['value']
      summary = jsonObj['basics']['summary']['value'];
    }
  }
  jsonObj['basics']['summary']['value'] = summary;

  return jsonObj;
};

const processProjectsMarkdownFields = (jsonObj) => {
  let list = jsonObj['projects']['list'];

  for (let i = 0; i < list.length; i++) {
    let item = jsonObj['projects']['list'][i];
    if (
      'webPage' in item['value'] &&
      !isValidUrl(
        item['value']['webPage']['slug'] &&
          isValidFilePath(item['value']['webPage']['detail'])
      )
    ) {
      let file_ = item['value']['webPage']['detail'];
      let fileAbs = appendToRootFolder(`_profile/${file_}`, 2);
      try {
        fs.accessSync(fileAbs, fs.constants.F_OK);
        jsonObj['projects']['list'][i]['value']['webPage'][
          'detail'
        ] = fs.readFileSync(fileAbs, 'utf8');
      } catch (err) {
        throw new Error(`${fileAbs} NOT found`);
      }
    }
  }

  return jsonObj;
};

const processPublicationsMarkdownFields = (jsonObj) => {
  let list = jsonObj['publications']['list'];

  for (let i = 0; i < list.length; i++) {
    let item = jsonObj['publications']['list'][i];
    if (
      'webPage' in item['value'] &&
      !isValidUrl(item['value']['webPage']['slug']) &&
      isValidFilePath(item['value']['webPage']['detail'])
    ) {
      let file_ = item['value']['webPage']['detail'];
      let fileAbs = appendToRootFolder(`_profile/${file_}`, 2);
      try {
        fs.accessSync(fileAbs, fs.constants.F_OK);
        jsonObj['publications']['list'][i]['value']['webPage'][
          'detail'
        ] = fs.readFileSync(fileAbs, 'utf8');
      } catch (err) {
        throw new Error(`${fileAbs} NOT found`);
      }
    }
  }

  return jsonObj;
};

const processCustomSectionsMarkdownFields = (jsonObj) => {
  let list = jsonObj['custom'];

  for (let i = 0; i < list.length; i++) {
    if (
      'value' in jsonObj['custom'][i] &&
      isValidFilePath(jsonObj['custom'][i]['value'])
    ) {
      let fileAbs = appendToRootFolder(
        `_profile/${jsonObj['custom'][i]['value']}`,
        2
      );

      try {
        fs.accessSync(fileAbs, fs.constants.F_OK);
        jsonObj['custom'][i]['value'] = fs.readFileSync(fileAbs, 'utf8');
      } catch (err) {
        throw new Error(`${fileAbs} NOT found`);
      }
    }

    if ('webPage' in jsonObj['custom'][i]) {
      if (
        'detail' in jsonObj['custom'][i]['webPage'] &&
        isValidFilePath(jsonObj['custom'][i]['webPage']['detail'])
      ) {
        let fileAbs = appendToRootFolder(
          `_profile/${jsonObj['custom'][i]['webPage']['detail']}`,
          2
        );

        try {
          fs.accessSync(fileAbs, fs.constants.F_OK);
          jsonObj['custom'][i]['webPage']['detail'] = fs.readFileSync(
            fileAbs,
            'utf8'
          );
        } catch (err) {
          throw new Error(`${fileAbs} NOT found`);
        }
      }
    }
  }

  return jsonObj;
};

const processSlug = (jsonObj, section) => {
  let list = {};
  if (section === 'custom') {
    list = jsonObj[section];
  } else {
    list = jsonObj[section]['list'];
  }

  for (let i = 0; i < list.length; i++) {
    let item = {};
    item = section === 'custom' ? list[i] : list[i]['value'];
    if (
      'webPage' in item &&
      'slug' in item['webPage'] &&
      !isValidUrl(item['webPage']['slug']) &&
      isValidSlug(item['webPage']['slug'])
    ) {
      if (!(section in jsonObj['slugMap'])) jsonObj['slugMap'][section] = {};

      const slug = item['webPage']['slug'];
      jsonObj['slugMap'][section] = Object.assign(jsonObj['slugMap'][section], {
        [slug]: { position: i },
      });
    }
  }

  return jsonObj;
};

const processMarkdownFieldsAndSlugs = (jsonObj) => {
  jsonObj['slugMap'] = {};

  for (key in jsonObj) {
    if (key === 'basics') {
      jsonObj = processProfileSummary(jsonObj);
    }

    if (key === 'projects') {
      jsonObj = processProjectsMarkdownFields(jsonObj);
      jsonObj = processSlug(jsonObj, 'projects');
    }

    if (key === 'publications') {
      jsonObj = processPublicationsMarkdownFields(jsonObj);
      jsonObj = processSlug(jsonObj, 'publications');
    }

    if (key === 'custom') {
      jsonObj = processCustomSectionsMarkdownFields(jsonObj);
      jsonObj = processSlug(jsonObj, 'custom');
    }
  }

  return jsonObj;
};

const processProfile = (relativeFilePath, depth, outFileRelativePath) => {
  let jsonObj = getJSONFromYAML(relativeFilePath, depth);
  const jsonFile = appendToRootFolder(outFileRelativePath, 2);

  // process markdown files
  jsonObj = processMarkdownFieldsAndSlugs(jsonObj);

  fs.writeFileSync(jsonFile, JSON.stringify(jsonObj));
};

processProfile(process.argv[2], 2, process.argv[3]);
