var path = require("path");
// directory structure
var rootDir = path.join(__dirname, "..");
var buildDir = path.join(rootDir, "relayImageUpload", "schema");

module.exports = {
  buildDir,
  schemaPath: path.join(buildDir, "schema.graphql"),
};
