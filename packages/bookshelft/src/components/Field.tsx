import * as React from "react";
import { defaultTo } from "ramda";
import { FieldProps, Field as FormikField } from "formik";
import {
  Input,
  Field as FormField,
  Label,
  InputError,
} from "@bookshelf/layout";

type TExternalProps = {
  label: React.ReactNode;
  name: string;
  placeholder?: string;
};

const getValue = defaultTo("");

/**
 * Check whether we should show error message to the user
 */
const shouldShowErrorMessage = ({ field, form }: FieldProps) => {
  if (!form.errors[field.name]) {
    return false;
  }

  return form.touched[field.name] || form.submitCount > 0;
};

const Field: React.FunctionComponent<TExternalProps> = ({
  name,
  label,
  ...props
}) => (
  <FormikField name={name}>
    {(fieldProps: FieldProps) => (
      <FormField>
        <Label>{label}</Label>

        <Input
          {...fieldProps.field}
          {...props}
          type="text"
          value={getValue(fieldProps.field.value)}
        />

        {shouldShowErrorMessage(fieldProps) && (
          <InputError>{fieldProps.form.errors[name]}</InputError>
        )}
      </FormField>
    )}
  </FormikField>
);

export { Field };
