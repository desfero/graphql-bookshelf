import * as React from "react";
import { BookFormFragmentFragment } from "../../generated/graphql";
import { BookForm } from "./BookForm";

type ExternalProps = {
  onSubmit: (book: BookFormFragmentFragment) => void;
  book: BookFormFragmentFragment;
};

const BookEditLayout: React.FunctionComponent<ExternalProps> = ({
  book,
  onSubmit,
}) => {
  return (
    <section>
      <h2>Edit book {book.title}</h2>

      <BookForm book={book} onSubmit={onSubmit} />
    </section>
  );
};

export { BookEditLayout };
