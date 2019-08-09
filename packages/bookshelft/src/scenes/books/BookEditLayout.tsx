import * as React from "react";
import { BookForm } from "./BookForm";
import { RequiredByKeys } from "../../react-app-env";

type BookFormProps = React.ComponentProps<typeof BookForm>;

const BookEditLayout: React.FunctionComponent<
  RequiredByKeys<BookFormProps, "book">
> = ({ book, onSubmit, onCancel }) => {
  return (
    <section>
      <h2>Edit book {book.title}</h2>

      <BookForm book={book} onSubmit={onSubmit} onCancel={onCancel} />
    </section>
  );
};

export { BookEditLayout };
