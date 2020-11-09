var fs = require('fs');

const createDirectory = (destination) => {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true }, (err) => {
      err ? console.log(err) : console.log(`${destination} created.`);
    });
  }
};

createDirectory(process.argv[2]);
