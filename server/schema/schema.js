const { GraphQLSchema } = require("graphql");

const query = require("./queries");
const mutation = require("./mutations");

const schema = new GraphQLSchema({
  mutation,
  query,
});

module.exports = schema;
