import * as React from "react";
import { gql } from "apollo-boost";
import { BigLoader } from "@bookshelf/layout";

import { BooksListLayout } from "./BooksListLayout";
import { BooksListQuery, useBooksListQuery } from "../../generated/graphql";
import { QueryFunctionComponent } from "../../react-app-env";

const BooksList: QueryFunctionComponent<BooksListQuery> = () => {
  const { data, loading } = useBooksListQuery();

  if (loading) {
    return <BigLoader />;
  }

  return <BooksListLayout {...data!} />;
};

BooksList.query = gql`
  query BooksList {
    books {
      ...BookItem
    }
  }
`;

export { BooksList };
