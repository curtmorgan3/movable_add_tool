const { readFile } = require("./fileReadUtils");
const { writeFile } = require("./fileWriteUtils");

async function editFile(filePath, injectedPoint, injectedCode) {
  if (!injectedCode) return;
  const props = await readFile(filePath);

  const status = await writeFile(
    filePath,
    props.file,
    props[injectedPoint],
    injectedCode
  );
  return status;
}

module.exports = {
  editFile
};
