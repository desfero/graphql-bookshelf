import * as React from "react";
import { BookFormFragmentFragment } from "../../generated/graphql";
import { BookForm } from "./BookForm";

type ExternalProps = {
  onSubmit: (book: BookFormFragmentFragment) => void;
};

const BookCreateLayout: React.FunctionComponent<ExternalProps> = ({
  onSubmit,
}) => {
  return (
    <section>
      <h2>Create new book</h2>

      <BookForm onSubmit={onSubmit} />
    </section>
  );
};

export { BookCreateLayout };
