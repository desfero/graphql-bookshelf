import * as React from "react";
import { gql } from "apollo-boost";

import { BooksListQuery} from "../../generated/graphql";

type LayoutFunctionComponent<P = {}> = React.FunctionComponent<P> & { fragment: any }

const BooksListLayout: LayoutFunctionComponent<BooksListQuery> = ({ books }) => {
  return <div>{books!.map(book => book!.title)}</div>;
};

BooksListLayout.fragment = gql`  
  fragment BookItem on Book {
    title
  }
`;

export { BooksListLayout };
