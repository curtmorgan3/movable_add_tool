const fs = require("fs");
const util = require("util");

async function writeFile(filePath, fileArr, lineNum, injection) {
  let injectedFile = [...fileArr];
  injectedFile.forEach((line, i) => {
    if (i === lineNum) {
      if (injectedFile[i - 1].includes("[]")) {
        injectedFile[i - 1] = injectedFile[i - 1].replace("[]", "");
      }
      let left = injectedFile.slice(0, i);
      let right = injectedFile.slice(i);
      left = left.concat(injection);
      injectedFile = left.concat(right);
    }
  });

  await injectCode(filePath, injectedFile);
}

const injectCode = async (filePath, injectedFile) => {
  const writeFileAsync = util.promisify(fs.writeFile);
  const newFile = injectedFile.join("\n");
  await writeFileAsync(filePath, newFile);
};

module.exports = {
  writeFile
};
