import { DocumentNode } from "graphql";
import {
  QueryHookOptions,
  useQuery as useApolloQuery,
  useMutation as useApolloMutation,
  MutationHookOptions,
} from "@apollo/react-hooks";
import { OperationVariables } from "apollo-client";

const useQuery = <D = any, V = OperationVariables>(
  query: DocumentNode,
  options?: QueryHookOptions<D, V>,
) => {
  const result = useApolloQuery<D, V>(query, options);

  if (result.error) {
    throw result.error;
  }

  return result;
};

const useMutation = <D = any, V = OperationVariables>(
  query: DocumentNode,
  options?: MutationHookOptions<D, V>,
) => {
  const result = useApolloMutation<D, V>(query, options);

  if (result[1].error) {
    throw result[1].error;
  }

  return result;
};

// TODO: Implement `useLazyQuery` and `useSubscription`

export * from "@apollo/react-hooks";
export { useQuery, useMutation };
