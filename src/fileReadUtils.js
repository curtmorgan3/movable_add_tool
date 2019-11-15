const fs = require("fs");
const readline = require("readline");

async function readFile(filePath) {
  return new Promise((res, rej) => {
    const instream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: instream
    });

    let toolLineNumber = 0;
    let propertiesLineNumber = 0;
    let dependenciesLineNumber = 0;
    let appJSSetupLineNumber = 0;
    let appJSExtraDataLineNumber = 0;
    let importLineNumber = 3;
    let finalLineNumber = 0;
    let currentLineNumber = 1;
    let fileArr = [];

    rl.on("line", input => {
      if (input.includes("tools:")) {
        toolLineNumber = currentLineNumber;
      } else if (input.includes("property_groups:")) {
        propertiesLineNumber = currentLineNumber;
      } else if (input.includes("dependencies:")) {
        dependenciesLineNumber = currentLineNumber;
      } else if (input.includes("appProperties(this);")) {
        appJSSetupLineNumber = currentLineNumber;
      } else if (input.includes("async analyticsData()")) {
        appJSExtraDataLineNumber = currentLineNumber;
      }
      fileArr.push(input);
      currentLineNumber++;
    })
      .on("close", () => {
        finalLineNumber = currentLineNumber;
        res({
          tools: toolLineNumber,
          manifestProperties: propertiesLineNumber,
          dependencies: dependenciesLineNumber,
          toolRegister: appJSSetupLineNumber,
          extraData: appJSExtraDataLineNumber,
          importStatements: importLineNumber,
          final: finalLineNumber,
          bottom: finalLineNumber - 2,
          file: fileArr
        });
      })
      .on("error", () => {
        rej("Problem reading file.");
      });
  });
}

module.exports = {
  readFile
};
