# Movable Tool Box

This package aims to make adding tools to custom apps easier by providing a CLI for adding SE packages.

Currently, the Movable Tool Box works with the following SE Packages:

[Rating Tool](https://github.com/movableink/se-packages/tree/master/rating-tool)

[Every Mundo](https://github.com/movableink/se-packages/tree/master/every-mundo)

[Map Tool](https://github.com/movableink/se-packages/tree/master/map-tool)

## Usage

Run `npm i movable-tool-box` or `yarn add movable-tool-box` from the root of the app.
Once this package is installed, run `add-tool <tool name>` from anywhere in the app.

```
Current Mappings:
  'rating' -> Rating Tool
  'map' -> Map Tool
  'mundo' -> Every Mundo Tool
```

The `add-tool` command will do seven things:

1. Install the tool as a dependency in the `package.json`
2. Update the `app-manifest.yml` file with the appropriate properties under `tools` and `properties`
3. Add any assets needed to the `app/img` directory
4. Register the tool in the `app/js/app.js` file
5. Inject boilerplate code in the `app/js/properties/index.js` file
6. Add any necessary files to `app/js/tools`
7. Add any necessary files to `app/js/components`

## Contributing

Adding tools to the Movable Tool Box is easy. Clone this [GitHub repo](https://github.com/curtmorgan3/movable_add_tool), make a branch with the name of the tool you're adding and add the following:

1.  Add any necessary assets to the `src/assets` directory.
2.  Add a file named `<toolName>Tool.js` in the `src/templates` directory.
3.  The template file should have seven array declarations. At the bottom of this README is the template for the rating tool. Note that the spaces in the strings should be made with **spaces, not tabs.** This will preserve their spacing in the injected code. If any declarations are not needed, set the variable to null. Declare an object that contains all of the declaration variables and export it.
4.  In `src/editUtils.js`, import your new template at the top of the file. Then add a case in the switch statement on the `getTemplate` function. The case will be the tool name that gets called in the CLI, the result should be returning your newly imported template object.
5.  Add any needed files for the `tools` or `components` directory in `src/files`.
6.  Update README to include the mapping of tool name to the tool it's installing, plus a link to the SE Packages page for that tool.

Once it's done, submit a PR and I'll update the package.

## Known Issues

If the `app/js/properties/index.js` file is empty except for the boilerplate created on a brand new app, the injected code will appear outside of the `appProperties` function. This is avoidable by putting a comment in the function to preserve the line break.

## Template File Example

```JavaScript
const toolDeclaration = [
  "   - type: productRating",
  "     name: productRating",
  "     label: Rating",
  "     icon: twitter-favorite",
  "     defaults:",
  "       text:",
  "       width: 150",
  "       height: 14",
  "       backgroundColor: transparent",
  "     dynamic_fields:",
  "       - type: api",
  "         label: Rating Data",
  "         description: Rating Data",
  "         name: dynamicProperty",
  "         allow_static_option: true",
  "         class_names: rating"
];

const propertyDeclaration = [
  "    - name: starRating",
  "      label: Star Rating Data",
  "      description: Star Rating",
  "      properties:",
  "        - name: app.rating",
  "          label: Stars",
  "          description: Stars",
  "          type: api",
  "          context_options:",
  "            - type: text",
  "              name: ratingIndex",
  "              label: Item Index",
  "              description: Item Index",
  "              value: '1'"
];

const toolRegisterDeclaration = [
  "    this.registerTool('productRating', ratingTool);"
];

const importDeclaration = [
  "import { ratingTool } from '@movable-internal/rating-tool';",
  "import '@movable-internal/rating-tool/package-manifest.yml';"
];

const propertiesJSDeclaration = [
  "  app.setProperty('app.rating', ({ getProperty }) => {",
  "    const { averageRating } = getProperty('parseData');",
  "    return {",
  "      rating: averageRating,",
  "      maxRating: 5,",
  "      fullStar: './app/img/star.png',",
  "      halfStar: './app/img/half.png',",
  "      emptyStar: './app/img/empty.png',",
  "      width: '15',",
  "      height: '13'",
  "    };",
  "  });"
];

const assets = ["empty.png", "half.png", "star.png"];

const dependencies = ["@movable-internal/rating-tool"];

const toolFiles = null; // ['myToolFile.js']

const componentFiles = null; // ['myComponentFile.js']

const ratingToolTemplate = {
  toolDeclaration,
  propertyDeclaration,
  toolRegisterDeclaration,
  importDeclaration,
  propertiesJSDeclaration,
  dependencies,
  assets
};

module.exports = {
  ratingToolTemplate
};

```
