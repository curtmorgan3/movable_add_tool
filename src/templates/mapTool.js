const toolDeclaration = [
  "   - type: image",
  "     name: mapTool",
  "     label: Map Tool",
  "     icon: pin",
  "     class_names: map-tool"
];

const toolRegisterDeclaration = ["    this.registerTool('mapTool', mapTool);"];

const importDeclaration = [
  "import { mapTool } from '@movable-internal/map-tool';",
  "import '@movable-internal/map-tool/package-manifest.yml';"
];

const propertyDeclaration = null;

const propertiesJSDeclaration = [
  "  app.setProperty('map.options', ({ getProperty }) => {",
  " ",
  "    const mapObject = {",
  "      'markers' : [",
  "         {",
  "           lat: '',",
  "           lon: '',",
  "           pin: ''",
  "         }",
  "       ],",
  "      'position': 'auto'",
  "    };",
  "    return mapObject;",
  " ",
  "  });"
];

const dependencies = ["@movable-internal/map-tool"];

const assets = null;

const toolFiles = null;

const componentFiles = null;

const mapToolTemplate = {
  toolDeclaration,
  propertyDeclaration,
  toolRegisterDeclaration,
  importDeclaration,
  propertiesJSDeclaration,
  dependencies,
  assets,
  toolFiles,
  componentFiles
};

module.exports = {
  mapToolTemplate
};
