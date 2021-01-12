const { GraphQLBoolean } = require("graphql");
const { mutationWithClientMutationId } = require("graphql-relay");
const { GraphQLUpload } = require("graphql-upload");

const ImageUploadMutation = mutationWithClientMutationId({
  name: "ImageUpload",
  inputFields: {
    image: {
      type: GraphQLUpload,
    },
  },
  mutateAndGetPayload: async (_, context) => {
    console.log("context: ", context);
    const { filename, mimetype, createReadStream } = await context.image;
    console.log("{ filename, mimetype, createReadStream }: ", {
      filename,
      mimetype,
      createReadStream,
    });
    const stream = createReadStream();
    console.log("stream: ", stream);
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
