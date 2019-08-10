import * as React from "react";
import { number, object, string } from "yup";
import { Form, Formik } from "formik";
import { gql } from "apollo-boost";
import { FormattedMessage } from "react-intl";

import { LayoutFunctionComponent } from "../../react-app-env";
import { BookFormFragmentFragment } from "../../generated/graphql";
import { Field } from "../../components/Field";

type ExternalProps = {
  onSubmit: (book: BookFormFragmentFragment) => void;
  onCancel: () => void;
  book?: BookFormFragmentFragment;
};

const BookSchema = object({
  title: string().required(),
  price: number().required(),
  author: string().required(),
});

const BookForm: LayoutFunctionComponent<ExternalProps> = ({
  book,
  onSubmit,
  onCancel,
}) => (
  <Formik
    initialValues={book!}
    validationSchema={BookSchema}
    onSubmit={values => onSubmit(values)}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field
          name="title"
          label={<FormattedMessage id="books.book-form.title" />}
          data-test-id="book-form.title"
        />

        <Field
          name="price"
          label={<FormattedMessage id="books.book-form.price" />}
          data-test-id="book-form.price"
        />

        <Field
          name="author"
          label={<FormattedMessage id="books.book-form.author" />}
          data-test-id="book-form.author"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          data-test-id="book-form.submit"
        >
          {book ? (
            <FormattedMessage id="books.book-form.save" />
          ) : (
            <FormattedMessage id="books.book-form.create" />
          )}
        </button>

        <button
          type="button"
          onClick={onCancel}
          data-test-id="book-form.cancel"
        >
          <FormattedMessage id="books.book-form.cancel" />
        </button>
      </Form>
    )}
  </Formik>
);

BookForm.fragment = gql`
  fragment BookFormFragment on Book {
    author
    price
    title
  }
`;

export { BookForm };
