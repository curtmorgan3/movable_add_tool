const { editFile } = require("./editUtils");
const { addDependencies, addAssets, getRoot, getPaths } = require("./cmdUtil");

const { ratingToolTemplate } = require("./templates/ratingTool");
const { mapToolTemplate } = require("./templates/mapTool");
const { everyMundoToolTemplate } = require("./templates/everyMundo");

async function initTool(template) {
  try {
    console.log("Injecting code and installing dependencies...");

    const root = await getRoot();
    const [manifestPath, appJSPath, propertiesJSPath, assetPath] = getPaths(
      root
    );

    await editFile(manifestPath, "tools", template.toolDeclaration);
    await editFile(
      manifestPath,
      "manifestProperties",
      template.propertyDeclaration
    );
    await addDependencies(template.dependencies);
    await editFile(appJSPath, "toolRegister", template.toolRegisterDeclaration);
    await editFile(appJSPath, "importStatements", template.importDeclaration);
    await editFile(
      propertiesJSPath,
      "bottom",
      template.propertiesJSDeclaration
    );
    await addAssets(assetPath, template.assets);

    console.log("Complete!");
  } catch (e) {
    console.error(e);
  }
}

initTool(ratingToolTemplate);

/*
TODO:
Templates for Animated Radial Dials
              Non-Animated Radial Dials
              Countdown Timer
*/
