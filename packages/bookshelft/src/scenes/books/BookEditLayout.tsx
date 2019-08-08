import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { gql } from "apollo-boost";
import { LayoutFunctionComponent } from "../../react-app-env";
import {
  BookEditFragmentFragment,
  BookEditQuery,
} from "../../generated/graphql";

const BookSchema = object({
  title: string().required(),
});

type ExternalProps = {
  onSubmit: (book: Omit<BookEditFragmentFragment, "bookId">) => void;
};

const BookEditLayout: LayoutFunctionComponent<
  BookEditQuery & ExternalProps
> = ({ book, onSubmit }) => {
  return (
    <section>
      <h2>Edit book {book!.title}</h2>
      <Formik
        initialValues={book!}
        validationSchema={BookSchema}
        onSubmit={values => onSubmit(values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

BookEditLayout.fragment = gql`
  fragment BookEditFragment on Book {
    author
    price
    title
  }
`;

export { BookEditLayout };
