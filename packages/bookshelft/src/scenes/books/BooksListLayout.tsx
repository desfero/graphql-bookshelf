import * as React from "react";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";

import { BooksListQuery } from "../../generated/graphql";
import { LayoutFunctionComponent } from "../../react-app-env";
import { CREATE_ROUTE, EDIT_ROUTE, withParams } from "../../constants/routes";
import { Money } from "../../components/Money";

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
  const selectedBooksTotalPrice = React.useMemo(
    () =>
      state.selectedIds.reduce((total, bookId) => {
        const book = books!.find(book => book!.id === bookId);

        if (!book) {
          throw new Error(`Book should be defined for ${bookId}`);
        }

        return total + book!.price;
      }, 0),
    [state.selectedIds, books],
  );

  return (
    <section data-test-id="landing">
      <Link to={CREATE_ROUTE}>Create New</Link>

      {state.selectedIds.length > 0 ? (
        <p>
          {state.selectedIds.length} books selected with a total price of{" "}
          <Money value={selectedBooksTotalPrice} />
        </p>
      ) : (
        <p>You don't have any books selected</p>
      )}

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
    price
    author
  }
`;

export { BooksListLayout };
