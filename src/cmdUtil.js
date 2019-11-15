const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function ls() {
  const { stdout } = await exec("ls");
  console.log("stdout: ", stdout);
}

async function touch(fileName) {
  await exec(`touch ${fileName}`);
}

async function getRoot() {
  const { stdout } = await exec("pwd");
  return stdout.trim();
}

async function addDependencies(packages) {
  await exec(`npm i ${packages.join(" ")}`);
}

async function addAssets(assetPath, assets) {
  return new Promise((resolve, reject) => {
    assets.map(async asset => {
      await exec(`cp ./src/assets/${asset} ${assetPath}`);
    });
    resolve("Complete");
  });
}

function getPaths(root) {
  const manifestPath = `${root}/app-manifest.yml`;
  const appJSPath = `${root}/app/js/app.js`;
  const propertiesJSPath = `${root}/app/js/properties/index.js`;
  const assetPath = `${root}/app.img`;

  return [manifestPath, appJSPath, propertiesJSPath, assetPath];
}

module.exports = {
  ls,
  touch,
  addDependencies,
  addAssets,
  getRoot,
  getPaths
};
