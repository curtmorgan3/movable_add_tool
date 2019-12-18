const toolRegisterDeclaration = ["    everyMundoDataProperties(this);"];

const importDeclaration = [
  "import { everyMundoDataProperties } from '@movable-internal/every-mundo';",
  "import '@movable-internal/every-mundo/package-manifest.yml';"
];

const propertiesJSDeclaration = [
  "  app.setProperty('everyMundo.apiOptions', ({ getProperty }) => {",
  "    const every_mundo_token = getProperty('options.every_mundo_token') || null;",
  "    const client_id = getProperty('options.client_id') || null;",
  "    const origin = getProperty('params.mi_origin') || getProperty('options.origin') || '';",
  "    const destination = getProperty('params.mi_destination') || getProperty('options.destination') || '';",
  "    const language_code = getProperty('options.language_code') || '';",
  "    const flight_type = getProperty('options.flight_type') || '';",
  "    const date_pattern = getProperty('options.date_pattern') || '';",
  "    const departure_date = getProperty('params.mi_departure_date') || getProperty('options.departure_date') || '';",
  "    const return_date = getProperty('params.mi_return_date') || getProperty('options.return_date') || '';",
  "    const travel_class = getProperty('options.travel_class') || '';",
  "    const data_window = getProperty('options.data_window') || '';",
  "    const min_duration = getProperty('options.min_duration') || '';",
  "    const max_duration = getProperty('options.max_duration') || '';",
  "    const fares_per_route = getProperty('options.fares_per_route') || '';",
  "    const routes_limit = getProperty('options.routes_limit') || '';",
  "    const output_currency = getProperty('options.output_currency') || '';",
  "    const decimal_separator = getProperty('options.decimal_separator') || '';",
  "    const thousands_separator = getProperty('options.thousands_separator') || '';",
  "    const decimal_places = getProperty('options.decimal_places') || '';",
  "    return {",
  "      every_mundo_token,",
  "      client_id,",
  "      origin,",
  "      destination,",
  "      language_code,",
  "      flight_type,",
  "      date_pattern,",
  "      departure_date,",
  "      return_date,",
  "      travel_class,",
  "      data_window,",
  "      min_duration,",
  "      max_duration,",
  "      fares_per_route,",
  "      routes_limit,",
  "      output_currency,",
  "      decimal_separator,",
  "      thousands_separator,",
  "      decimal_places",
  "    };",
  "  });"
];

const dependencies = ["@movable-internal/every-mundo"];

const everyMundoToolTemplate = {
  toolDeclaration: null,
  propertyDeclaration: null,
  toolRegisterDeclaration,
  importDeclaration,
  propertiesJSDeclaration,
  dependencies
};

module.exports = {
  everyMundoToolTemplate
};
