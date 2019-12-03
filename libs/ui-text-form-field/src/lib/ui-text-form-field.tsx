import React, { FC } from 'react';

import { FieldProps, getIn } from 'formik';

import { TextField } from '@material-ui/core';

import './ui-text-form-field.scss';

/* eslint-disable-next-line */
export interface UiTextFormFieldProps {}

export const UiTextFormField: FC<FieldProps> = ({ field, form, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <TextField
      fullWidth
      margin="normal"
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
    />
  );
};

export default UiTextFormField;
