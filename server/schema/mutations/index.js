const { GraphQLObjectType } = require("graphql");

const imageUpload = require("./imageUpload");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    imageUpload,
  },
});

module.exports = mutation;
