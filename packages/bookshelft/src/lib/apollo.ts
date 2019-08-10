import { DocumentNode } from "graphql";
import {
  QueryHookOptions,
  useQuery as useApolloQuery,
} from "@apollo/react-hooks";
import { OperationVariables } from "apollo-client";

const useQuery = <D = any, V = OperationVariables>(
  query: DocumentNode,
  options?: QueryHookOptions<D, V>,
) => {
  const result = useApolloQuery<D, V>(query, options);

  // TODO: add an ability to handle error on our own in component
  if (result.error) {
    throw result.error;
  }

  return result;
};

export * from "@apollo/react-hooks";
export { useQuery };
