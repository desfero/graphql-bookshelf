import * as React from "react";
import { number, object, string } from "yup";
import { Form, Formik } from "formik";
import { gql } from "apollo-boost";

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
        <Field name="title" label="Title" data-test-id="book-form.title" />

        <Field name="price" label="Price" data-test-id="book-form.price" />

        <Field name="author" label="Author" data-test-id="book-form.author" />

        <button
          type="submit"
          disabled={isSubmitting}
          data-test-id="book-form.submit"
        >
          {book ? "Save" : "Create"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          data-test-id="book-form.cancel"
        >
          Cancel
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
