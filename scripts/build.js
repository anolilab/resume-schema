const fs = require("fs");
const { compileFromFile } = require("json-schema-to-typescript");

// eslint-disable-next-line no-console
compileFromFile("./schema.json").then((ts) => fs.writeFileSync("types.d.ts", ts)).catch((error) => console.log(error));
