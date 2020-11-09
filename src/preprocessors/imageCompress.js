const fs = require('fs');
const path = require('path');
const compressImages = require('compress-images');

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

const processImages = (relativePath, depth) => {
  const fPath = appendToRootFolder(relativePath, depth);
  const pathArr = fPath.split(path.sep);
  const compressedFPath = `${pathArr
    .slice(0, pathArr.length - 1)
    .join(path.sep)}${path.sep}compressed-images${path.sep}`;

  const sourceFPath = `${fPath}/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}`;
  compressImages(
    sourceFPath,
    compressedFPath,
    { compress_force: false, statistic: false, autoupdate: true },
    false,
    { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
    { png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] } },
    { svg: { engine: 'svgo', command: '--multipass' } },
    {
      gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] },
    },
    function (error, completed, statistic) {
      console.log('-------------');
      console.log(error);
      console.log(completed);
      console.log(statistic);
      console.log('-------------');
    }
  );
};

processImages(process.argv[2], 2);
