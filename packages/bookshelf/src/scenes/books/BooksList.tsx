import * as React from "react";
import { gql } from "apollo-boost";
import { BigLoader } from "@bookshelf/layout";

import { BooksListLayout } from "./BooksListLayout";
import { useBooksListQuery } from "../../generated/graphql";
import { QueryFunctionComponent } from "../../react-app-env";
import { withSceneTitle } from "../../hocs/withSceneTitle";

const BooksList: QueryFunctionComponent = () => {
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

const BooksListWithTitle = withSceneTitle(() => "Books List")(BooksList);

export { BooksListWithTitle as BooksList };
