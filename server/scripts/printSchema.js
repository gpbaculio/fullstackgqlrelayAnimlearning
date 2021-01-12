const fs = require("fs");
const { printSchema } = require("graphql");

const schema = require("../schema");

const { schemaPath } = require("../../config/projectPaths");

fs.writeFileSync(schemaPath, printSchema(schema));

console.log("Wrote " + schemaPath);
