var fse = require('fs-extra');
const path = require('path');

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

const copyDir = (srcRelativePath, destRelativePath, depth) => {
  const srcPath = appendToRootFolder(srcRelativePath, depth);
  const destPath = appendToRootFolder(destRelativePath, depth);

  console.log(srcPath);
  console.log(destPath);

  fse.copy(srcPath, destPath, function (err) {
    if (err) {
      console.error(err);
      return console.error(err);
    }
  });
};

copyDir(process.argv[2], process.argv[3], 2);
