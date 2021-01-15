const { GraphQLBoolean, GraphQLString, GraphQLNonNull } = require("graphql");
const { mutationWithClientMutationId } = require("graphql-relay");
const { GraphQLUpload } = require("graphql-upload");

const ImageUploadMutation = mutationWithClientMutationId({
  name: "ImageUpload",
  inputFields: {
    fileName: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (root, { req }) => {
    // const { filename, mimetype, createReadStream } = await req.body.image;
    // console.log("{ filename, mimetype, createReadStream }: ", {
    //   filename,
    //   mimetype,
    //   createReadStream,
    // });
    console.log("req: ", req);
    // const stream = createReadStream();
    // console.log("stream: ", stream);
    return { image: true };
  },
  outputFields: {
    image: {
      type: GraphQLBoolean,
      resolve: ({ image }) => image,
    },
  },
});

module.exports = ImageUploadMutation;
