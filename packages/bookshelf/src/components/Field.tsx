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

/**
 * Generate the error id used to associate error with input element
 */
const generateErrorId = (name: string) => `${name}_error`;

// TODO: Add support for select, radio, checkbox
const Field: React.FunctionComponent<TExternalProps> = ({
  name,
  label,
  ...props
}) => (
  <FormikField name={name}>
    {(fieldProps: FieldProps) => {
      const isInvalid = shouldShowErrorMessage(fieldProps);

      return (
        <FormField>
          <Label>{label}</Label>

          <Input
            {...fieldProps.field}
            {...props}
            aria-invalid={isInvalid}
            aria-describedby={generateErrorId(name)}
            type="text"
            value={getValue(fieldProps.field.value)}
          />

          {isInvalid && (
            <InputError id={generateErrorId(name)}>
              {fieldProps.form.errors[name]}
            </InputError>
          )}
        </FormField>
      );
    }}
  </FormikField>
);

export { Field };
