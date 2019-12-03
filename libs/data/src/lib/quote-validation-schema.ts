import * as yup from 'yup';
import moment from 'moment';

import { JetModelOptions } from './data';

export const quoteValidationSchema = yup.object({
  ownerName: yup.string().required('Owner Name is required'),
  jetModel: yup
    .mixed()
    .oneOf(JetModelOptions, 'Invalid value')
    .required('Jet Model is required'),
  seatCapacity: yup
    .number()
    .typeError('Must be a number')
    .integer('Must be an integer')
    .positive('Must be greater than zero')
    .required('Seat Capacity is required'),
  manufacturedDate: yup
    .date()
    .typeError('Invalid Date')
    .max(moment().format(), 'Date cannot be in the future')
    .required('Manufactured Date is required'),
  purchasePrice: yup
    .number()
    .typeError('Must be a number')
    .integer('Must be an integer')
    .positive('Must be greater than zero')
    .required('Purchase Price is required'),
  brokerEmail: yup
    .string()
    .email('Invalid email')
    .required('Broker email is required'),
});
