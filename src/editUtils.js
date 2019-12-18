const { readFile } = require("./fileReadUtils");
const { writeFile } = require("./fileWriteUtils");

const { ratingToolTemplate } = require("./templates/ratingTool");
const { mapToolTemplate } = require("./templates/mapTool");
const { everyMundoToolTemplate } = require("./templates/everyMundo");

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

function getTemplate(templateName) {
  switch (templateName) {
    case "rating":
      return ratingToolTemplate;
    case "map":
      return mapToolTemplate;
    case "mundo":
      return everyMundoToolTemplate;
    default:
      return null;
  }
}

module.exports = {
  editFile,
  getTemplate
};
