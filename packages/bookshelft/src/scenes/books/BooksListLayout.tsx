import * as React from "react";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
import { CardGroup, Card, cardType } from "@bookshelf/layout";

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
      <Link data-test-id="books-list.create-book" to={CREATE_ROUTE}>
        Create New
      </Link>

      {state.selectedIds.length > 0 ? (
        <p>
          <span data-test-id="books-list.selected.total-selected">
            {state.selectedIds.length}
          </span>{" "}
          books selected with a total price of{" "}
          <Money
            data-test-id="books-list.selected.total-price"
            value={selectedBooksTotalPrice}
          />
        </p>
      ) : (
        <p>You don't have any books selected</p>
      )}

      <CardGroup>
        {books!.map(book => {
          return (
            <Card
              type={cardType.default}
              key={book!.id}
              data-test-id="books-list.book"
            >
              <h3 data-test-id="books-list.book.title">{book!.title}</h3>
              <p>
                Book price:{" "}
                <Money
                  data-test-id="books-list.book.price"
                  value={book!.price}
                />
              </p>
              <p>
                Book author:{" "}
                <span data-test-id="books-list.book.author">
                  {book!.author}
                </span>
              </p>
              <Link
                to={withParams(EDIT_ROUTE, { bookId: book!.id })}
                data-test-id="books-list.book.edit"
              >
                Edit book
              </Link>
              <input
                type="checkbox"
                checked={isSelectedSelector(state, book!.id)}
                data-test-id="books-list.book.select"
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
            </Card>
          );
        })}
      </CardGroup>
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
