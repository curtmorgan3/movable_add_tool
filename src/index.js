const { editFile, getTemplate } = require("./editUtils");
const {
  installDependencies,
  addAssets,
  getRoot,
  getPaths
} = require("./cmdUtil");

async function initTool(templateName) {
  try {
    const template = getTemplate(templateName);
    console.log("Injecting code and installing dependencies...");

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
