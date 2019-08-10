import * as React from "react";
import { FormattedMessage } from "react-intl";

import { BookForm } from "./BookForm";
import { RequiredByKeys } from "../../react-app-env";

type BookFormProps = React.ComponentProps<typeof BookForm>;

const BookEditLayout: React.FunctionComponent<
  RequiredByKeys<BookFormProps, "book">
> = ({ book, onSubmit, onCancel }) => {
  return (
    <section>
      <h2>
        <FormattedMessage
          id="books.edit.heading"
          values={{ title: book.title }}
        />
      </h2>

      <BookForm book={book} onSubmit={onSubmit} onCancel={onCancel} />
    </section>
  );
};

export { BookEditLayout };
