import * as React from "react";
import { FormattedMessage } from "react-intl";

import { BookForm } from "./BookForm";

type BookFormProps = React.ComponentProps<typeof BookForm>;

const BookCreateLayout: React.FunctionComponent<
  Omit<BookFormProps, "book">
> = ({ onSubmit, onCancel }) => {
  return (
    <section>
      <h2>
        <FormattedMessage id="books.create.heading" />
      </h2>

      <BookForm onSubmit={onSubmit} onCancel={onCancel} />
    </section>
  );
};

export { BookCreateLayout };
