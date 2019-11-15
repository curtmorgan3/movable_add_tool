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

const mapToolTemplate = {
  toolDeclaration,
  propertyDeclaration: null,
  toolRegisterDeclaration,
  importDeclaration,
  propertiesJSDeclaration,
  dependencies
};

module.exports = {
  mapToolTemplate
};
