import * as React from "react";
import { defaultTo } from "ramda";
import { ErrorMessage, FieldProps, Field as FormikField } from "formik";
import { Input, Field as FormField, Label } from "@bookshelf/layout";

type TExternalProps = {
  label: React.ReactNode;
  name: string;
  placeholder?: string;
};

const getValue = defaultTo("");

const Field: React.FunctionComponent<TExternalProps> = ({
  name,
  label,
  ...props
}) => (
  <FormikField name={name}>
    {({ field }: FieldProps) => (
      <FormField>
        <Label>{label}</Label>
        <Input
          {...field}
          {...props}
          type="text"
          value={getValue(field.value)}
        />
        <ErrorMessage name={name} component="div" />
      </FormField>
    )}
  </FormikField>
);

export { Field };
