#!/usr/bin/env node

const { initTool } = require("./index.js");
// prettier-ignore
const [,, ...args] = process.argv;

initTool(args[0]);
