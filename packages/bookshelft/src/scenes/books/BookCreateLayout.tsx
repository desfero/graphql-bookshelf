import * as React from "react";
import { BookForm } from "./BookForm";

type BookFormProps = React.ComponentProps<typeof BookForm>;

const BookCreateLayout: React.FunctionComponent<
  Omit<BookFormProps, "book">
> = ({ onSubmit, onCancel }) => {
  return (
    <section>
      <h2>Create new book</h2>

      <BookForm onSubmit={onSubmit} onCancel={onCancel} />
    </section>
  );
};

export { BookCreateLayout };
