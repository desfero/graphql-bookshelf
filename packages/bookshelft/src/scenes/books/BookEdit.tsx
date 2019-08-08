import * as React from "react";
import { gql } from "apollo-boost";

import { useBookEditQuery, useEditBookMutation } from "../../generated/graphql";
import { BookEditLayout } from "./BookEditLayout";
import { QueryFunctionComponent } from "../../react-app-env";
import { RouteComponentProps, withRouter } from "react-router";
import { ROOT_ROUTE } from "../../constants/routes";

type ExternalProps = { id: number };

const BookEdit: QueryFunctionComponent<ExternalProps & RouteComponentProps> = ({
  id,
  history,
}) => {
  const { data, error, loading } = useBookEditQuery({ variables: { id } });
  const [editBook] = useEditBookMutation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <BookEditLayout
      {...data}
      onSubmit={async book => {
        await editBook({ variables: { ...book, bookId: id } });

        history.push(ROOT_ROUTE);
      }}
    />
  );
};

BookEdit.query = gql`
  query BookEdit($id: Int!) {
    book(bookId: $id) {
      id: bookId
      ...BookEditFragment
    }
  }

  mutation EditBook(
    $author: String!
    $bookId: Int!
    $price: Float!
    $title: String!
  ) {
    editBook(author: $author, bookId: $bookId, price: $price, title: $title) {
      id: bookId
      ...BookEditFragment
    }
  }
`;

const BookEditWithRouter = withRouter(BookEdit);

export { BookEditWithRouter as BookEdit };
