import * as React from "react";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";

import { BooksListQuery } from "../../generated/graphql";
import { LayoutFunctionComponent } from "../../react-app-env";
import { EDIT_ROUTE, withParams } from "../../constants/routes";

const BooksListLayout: LayoutFunctionComponent<BooksListQuery> = ({
  books,
}) => {
  return (
    <section>
      {books!.map(book => {
        return (
          <article key={book!.id}>
            <h3>{book!.title}</h3>
            <Link to={withParams(EDIT_ROUTE, { bookId: book!.id })}>
              Edit book
            </Link>
          </article>
        );
      })}
    </section>
  );
};

BooksListLayout.fragment = gql`
  fragment BookItem on Book {
    id: bookId
    title
  }
`;

export { BooksListLayout };
