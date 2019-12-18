const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function ls() {
  const { stdout } = await exec("ls");
  console.log("stdout: ", stdout);
}

async function touch(fileName) {
  await exec(`touch ${fileName}`);
}

async function cd(path) {
  await exec(`cd ${path}`);
}

async function getRoot() {
  cd("../../../");
  const { stdout } = await exec("pwd");
  return stdout.trim();
}

async function installDependencies(dependencies) {
  await exec(`npm i ${dependencies.join(" ")}`);
}

async function addAssets(assetPath, assets) {
  return new Promise((resolve, reject) => {
    if (assets) {
      assets.map(async asset => {
        await exec(
          `cp ./node_modules/movable_tool_box/src/assets/${asset} ${assetPath}`
        );
      });
    }
    resolve("Complete");
  });
}

async function addToolFiles(path, toolFileArray) {
  return new Promise((resolve, reject) => {
    if (toolFileArray) {
      toolFileArray.map(async file => {
        await exec(
          `cp ./node_modules/movable_tool_box/src/files/${file} ${path}`
        );
      });
    }
    resolve("Complete");
  });
}

async function addComponentFiles(path, componentFileArray) {
  return new Promise((resolve, reject) => {
    if (componentFileArray) {
      componentFileArray.map(async file => {
        await exec(
          `cp ./node_modules/movable_tool_box/src/files/${file} ${path}`
        );
      });
    }
    resolve("Complete");
  });
}

function getPaths(root) {
  const manifestPath = `${root}/app-manifest.yml`;
  const appJSPath = `${root}/app/js/app.js`;
  const propertiesJSPath = `${root}/app/js/properties/index.js`;
  const assetPath = `${root}/app/img`;
  const packagePath = `${root}/package.json`;
  const toolPath = `${root}/js/tools`;
  const componentPath = `${root}/js/components`;

  return [
    manifestPath,
    appJSPath,
    propertiesJSPath,
    assetPath,
    packagePath,
    toolPath,
    componentPath
  ];
}

module.exports = {
  ls,
  touch,
  installDependencies,
  addAssets,
  getRoot,
  getPaths,
  cd,
  addToolFiles,
  addComponentFiles
};
