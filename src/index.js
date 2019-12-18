const { editFile, getTemplate } = require("./editUtils");
const {
  installDependencies,
  addAssets,
  getRoot,
  getPaths
} = require("./cmdUtil");

async function initTool(templateName) {
  try {
    console.log("Injecting code and installing dependencies...");
    const template = getTemplate(templateName);
    if (!template) {
      throw new Error(
        `No template associated with ${templateName}. Try one of these tools: \n rating, map, mundo`
      );
    }

    const root = await getRoot();

    const [
      manifestPath,
      appJSPath,
      propertiesJSPath,
      assetPath,
      packagePath
    ] = getPaths(root);

    await editFile(manifestPath, "tools", template.toolDeclaration);
    await editFile(
      manifestPath,
      "manifestProperties",
      template.propertyDeclaration
    );
    await editFile(appJSPath, "toolRegister", template.toolRegisterDeclaration);
    await editFile(appJSPath, "importStatements", template.importDeclaration);
    await editFile(
      propertiesJSPath,
      "bottom",
      template.propertiesJSDeclaration
    );
    await addAssets(assetPath, template.assets);
    await installDependencies(template.dependencies);

    console.log("Complete!");
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  initTool
};
