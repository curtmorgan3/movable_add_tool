From root of app, use command add-rating-tool to

1. add "@movable-internal/rating-tool": "^0.0.5", to first line of dependencies in package.json
2. add import { ratingTool } from '@movable-internal/rating-tool';
   import '@movable-internal/rating-tool/package-manifest.yml';
   to lines 3 and 4 of app.js
3. add this.registerTool('productRating', ratingTool);
   after appProperties(this);
4. add


    ```
    - type: productRating
      name: productRating
      label: Rating
      icon: twitter-favorite
      defaults:
        text: ''
        width: 150
        height: 14
        backgroundColor: transparent
      dynamic_fields:
        - type: api
          label: Rating Data
          description: Rating Data
          name: dynamicProperty
          allow_static_option: true
      class_names: rating
    ```
    after tools:

5. add


    ```
    - name: starRating
      label: Star Rating Data
      description: Star Rating
      properties:
        - name: app.rating
          label: Stars
          description: Stars
          type: api
          context_options:
            - type: text
              name: ratingIndex
              label: Item Index
              description: Item Index
              value: '1'
    ```
    after properties:

6. add

```
 app.setProperty('app.rating', async ({ getProperty }) => {
 const { rating } = getProperty('getRating');

 return {
   rating: rating,
   maxRating: 5,
   fullStar: './app/img/star.png',
   halfStar: './app/img/half.png',
   emptyStar: './app/img/empty.png',
   width: '15',
   height: '13'
 };
});
```

to bottom of properties/index.js

7. Add images to image directory

## Blank Template

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

const dependencies = ["@movable-internal/rating-tool,"];

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
