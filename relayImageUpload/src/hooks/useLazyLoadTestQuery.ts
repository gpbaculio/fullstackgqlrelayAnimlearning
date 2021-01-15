import { useLazyLoadQuery } from "react-relay/hooks";
import { TestGraphQL } from "../queries";
import { TestGraphQLQuery } from "../__generated__/TestGraphQLQuery.graphql";

const useLazyLoadTestQuery = () =>
  useLazyLoadQuery<TestGraphQLQuery>(
    TestGraphQL,
    {},
    { fetchPolicy: "store-and-network" }
  );

export default useLazyLoadTestQuery;
