import * as React from "react";
import { gql } from "apollo-boost";
import { compose } from "recompose";

import {
  BooksListDocument,
  BooksListQuery,
  useCreateBookMutation,
} from "../../generated/graphql";
import { QueryFunctionComponent } from "../../react-app-env";
import { RouteComponentProps, withRouter } from "react-router";
import { ROOT_ROUTE } from "../../constants/routes";
import { BookCreateLayout } from "./BookCreateLayout";
import { withSceneTitle } from "../../hocs/withSceneTitle";

const BookCreate: QueryFunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  const [createBook] = useCreateBookMutation({
    update(cache, { data }) {
      const query = BooksListDocument;

      const { books } = cache.readQuery<BooksListQuery>({ query })!;

      cache.writeQuery({
        query,
        data: { books: books!.concat(data!.createBook) },
      });
    },
  });

  return (
    <BookCreateLayout
      onSubmit={async book => {
        await createBook({ variables: book });

        history.push(ROOT_ROUTE);
      }}
      onCancel={() => {
        history.push(ROOT_ROUTE);
      }}
    />
  );
};

BookCreate.query = gql`
  mutation CreateBook($author: String!, $price: Float!, $title: String!) {
    createBook(author: $author, price: $price, title: $title) {
      id: bookId
      ...BookFormFragment
    }
  }
`;

const BookCreateWithRouter = compose<RouteComponentProps, {}>(
  withRouter,
  withSceneTitle(() => "Create new book"),
)(BookCreate);

export { BookCreateWithRouter as BookCreate };
