import * as React from "react";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";

import { BooksListQuery } from "../../generated/graphql";
import { LayoutFunctionComponent } from "../../react-app-env";
import { EDIT_ROUTE, withParams } from "../../constants/routes";

type State = {
  selectedIds: number[];
};

const initialState: State = {
  selectedIds: [],
};

enum ActionTypes {
  ADD = "add",
  REMOVE = "remove",
}

type Action = {
  type: ActionTypes;
  payload: {
    bookId: number;
  };
};

const selectedBooksReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return {
        selectedIds: state.selectedIds
          .filter(id => id !== action.payload.bookId)
          .concat(action.payload.bookId),
      };
    case ActionTypes.REMOVE:
      return {
        selectedIds: state.selectedIds.filter(
          id => id !== action.payload.bookId,
        ),
      };
  }
};

const isSelectedSelector = (state: State, bookId: number) =>
  state.selectedIds.includes(bookId);

const BooksListLayout: LayoutFunctionComponent<BooksListQuery> = ({
  books,
}) => {
  const [state, dispatch] = React.useReducer(
    selectedBooksReducer,
    initialState,
  );

  return (
    <section>
      {books!.map(book => {
        return (
          <article key={book!.id}>
            <h3>{book!.title}</h3>
            <Link to={withParams(EDIT_ROUTE, { bookId: book!.id })}>
              Edit book
            </Link>
            <input
              type="checkbox"
              checked={isSelectedSelector(state, book!.id)}
              onChange={e => {
                const checked = e.target.checked;

                if (checked) {
                  dispatch({
                    type: ActionTypes.ADD,
                    payload: { bookId: book!.id },
                  });
                } else {
                  dispatch({
                    type: ActionTypes.REMOVE,
                    payload: { bookId: book!.id },
                  });
                }
              }}
            />
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
