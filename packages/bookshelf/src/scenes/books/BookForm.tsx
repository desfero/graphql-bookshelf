import * as React from "react";
import { number, object, string } from "yup";
import { Form, Formik } from "formik";
import { gql } from "apollo-boost";
import { FormattedMessage } from "react-intl";
import { Button } from "@bookshelf/layout";

import { LayoutFunctionComponent } from "../../react-app-env";
import { BookFormFragmentFragment } from "../../generated/graphql";
import { Field } from "../../components/Field";
import styled from "styled-components";

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

const Buttons = styled.div`
  margin-top: 2em;
  text-align: right;
  
  ${Button} + ${Button} {
    margin-left: 1em;
  }
`;

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

        <Buttons>
          <Button
            type="submit"
            disabled={isSubmitting}
            data-test-id="book-form.submit"
          >
            {book ? (
              <FormattedMessage id="books.book-form.save" />
            ) : (
              <FormattedMessage id="books.book-form.create" />
            )}
          </Button>

          <Button
            type="button"
            onClick={onCancel}
            data-test-id="book-form.cancel"
          >
            <FormattedMessage id="books.book-form.cancel" />
          </Button>
        </Buttons>
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
