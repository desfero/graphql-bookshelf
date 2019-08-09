import * as React from "react";
import { gql } from "apollo-boost";

import { BooksListLayout } from "./BooksListLayout";
import { BooksListQuery, useBooksListQuery } from "../../generated/graphql";
import { QueryFunctionComponent } from "../../react-app-env";

const BooksList: QueryFunctionComponent<BooksListQuery> = () => {
  const { data, error, loading } = useBooksListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <BooksListLayout {...data} />;
};

BooksList.query = gql`
  query BooksList {
    books {
      ...BookItem
    }
  }
`;

export { BooksList };
