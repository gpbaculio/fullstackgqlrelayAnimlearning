const { GraphQLObjectType, GraphQLString } = require("graphql");

const query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    test: {
      type: GraphQLString,
      resolve: () => "test",
    },
  }),
});

module.exports = query;
