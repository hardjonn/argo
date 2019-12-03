import React, { FC, useState } from 'react';

import moment from 'moment';
import MomentUtils from '@date-io/moment';

import { FieldProps, getIn } from 'formik';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import './ui-date-form-field.scss';

/* eslint-disable-next-line */
export interface UiDateFormFieldProps {}

export const UiDateFormField: FC<FieldProps> = ({ field, form, ...props }) => {
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(
    moment()
  );

  const handleDateChange = (date: moment.Moment | null) => {
    const dateValue = date ? date.format() : date;
    setSelectedDate(date);
    form.setFieldValue(field.name, dateValue || '');
  };

  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        value={selectedDate}
        onChange={handleDateChange}
        onBlur={() => form.setFieldTouched(field.name)}
        onFocus={() => form.setFieldTouched(field.name)}
        fullWidth
        margin="normal"
        helperText={errorText}
        error={!!errorText}
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
};

export default UiDateFormField;
