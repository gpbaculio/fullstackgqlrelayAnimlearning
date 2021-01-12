import { graphql } from "react-relay";

const ImageUploadGraphQL = graphql`
  mutation ImageUploadGraphQLMutation($input: ImageUploadInput!) {
    imageUpload(input: $input) {
      image
      clientMutationId
    }
  }
`;

export default ImageUploadGraphQL;
