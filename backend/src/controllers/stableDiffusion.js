const { exec } = require('child_process');

const generateImage = async (text) => {
  return new Promise((resolve, reject) => {
    exec(`python generate.py --text "${text}"`, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }
      resolve(stdout.trim());
    });
  });
};

module.exports = { generateImage };
