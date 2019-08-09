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
        <Field name="title" label="Title" />

        <Field name="price" label="Price" />

        <Field name="author" label="Author" />

        <button type="submit" disabled={isSubmitting}>
          Create
        </button>

        <button type="button" onClick={onCancel}>
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
