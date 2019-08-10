import * as React from "react";
import { gql } from "apollo-boost";
import { BigLoader } from "@bookshelf/layout";

import { useBookEditQuery, useEditBookMutation } from "../../generated/graphql";
import { BookEditLayout } from "./BookEditLayout";
import { QueryFunctionComponent } from "../../react-app-env";
import { RouteComponentProps, withRouter } from "react-router";
import { ROOT_ROUTE } from "../../constants/routes";
import { NotFoundError } from "../../constants/errors";
import { withSceneTitle } from "../../hocs/withSceneTitle";

type ExternalProps = { id: number };

const BookEditLayoutWithTitle = withSceneTitle<
  React.ComponentProps<typeof BookEditLayout>
>(props => `Edit ${props.book.title}`)(BookEditLayout);

const BookEdit: QueryFunctionComponent<ExternalProps & RouteComponentProps> = ({
  id,
  history,
}) => {
  const { data, loading } = useBookEditQuery({ variables: { id } });
  const [editBook] = useEditBookMutation();

  if (loading) {
    return <BigLoader />;
  }

  if (!data!.book) {
    throw new NotFoundError();
  }

  return (
    <BookEditLayoutWithTitle
      book={data!.book!}
      onSubmit={async book => {
        await editBook({ variables: { ...book, bookId: id } });

        history.push(ROOT_ROUTE);
      }}
      onCancel={() => {
        history.push(ROOT_ROUTE);
      }}
    />
  );
};

BookEdit.query = gql`
  query BookEdit($id: Int!) {
    book(bookId: $id) {
      ...BookFormFragment
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
      ...BookFormFragment
    }
  }
`;

const BookEditWithRouter = withRouter(BookEdit);

export { BookEditWithRouter as BookEdit };
