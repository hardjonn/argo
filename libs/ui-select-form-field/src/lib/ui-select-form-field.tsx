import React, { FC } from 'react';

import { FieldProps, getIn } from 'formik';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';

import './ui-select-form-field.scss';

/* eslint-disable-next-line */
export interface UiSelectFormFieldProps {}

export interface SelectFormFieldOptions {
  label: string;
  value: string;
}

export interface SelectFormFieldProps {
  label?: string;
  options: SelectFormFieldOptions[];
}

export const UiSelectFormField: FC<FieldProps & SelectFormFieldProps> = ({
  field,
  form,
  label,
  options,
  ...props
}) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <FormControl fullWidth margin="normal" error={!!errorText}>
      {label && <InputLabel>{label}</InputLabel>}

      <Select {...field} {...props}>
        {options.map(o => (
          <MenuItem key={o.value} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

export default UiSelectFormField;
