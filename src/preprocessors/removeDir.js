var fs = require('fs');
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

const removeDir = (relativePath, depth) => {
  const fPath = appendToRootFolder(relativePath, depth);
  fs.rmdir(
    fPath,
    {
      recursive: true,
    },
    (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Directory ${relativePath} deleted`);
      }
    }
  );
};

removeDir(process.argv[2], 2);
