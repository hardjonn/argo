import React, { FC, useState } from 'react';

import { Formik, Field, Form } from 'formik';

import moment from 'moment';
import axios from 'axios';

import { environment as env } from '@env';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Button,
  Icon,
  LinearProgress,
  InputAdornment,
} from '@material-ui/core';

import {
  JetModelOptions,
  QuoteApiModel,
  QuoteResponseSuccess,
  QuoteResponseError,
  quoteFieldsMap,
  quoteInitialValues,
  quoteValidationSchema,
} from '@argo/data';

import UiErrorMessageCard from '@argo/ui-error-message-card';
import UiAnnualPremiumCard from '@argo/ui-annual-premium';
import UiTextFormField from '@argo/ui-text-form-field';
import UiSelectFormField from '@argo/ui-select-form-field';
import UiDateFormField from '@argo/ui-date-form-field';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

export const FeatureQuotePage: FC = () => {
  const classes = useStyles({});
  const [
    successResponse,
    setSuccessResponse,
  ] = useState<QuoteResponseSuccess | null>(null);
  const [errorResponse, setErrorResponse] = useState<QuoteResponseError | null>(
    null
  );

  const handleOnSubmit = (data, setSubmitting, setFieldError) => {
    setSubmitting(true);
    setSuccessResponse(null);
    setErrorResponse(null);

    const manDate = moment
      .utc(data.manufacturedDate)
      .startOf('day')
      .toISOString();

    // generate request
    const quoteRequest: QuoteApiModel = {
      owner_name: data.ownerName.trim(),
      model: data.jetModel.trim(),
      broker_email: data.brokerEmail.trim(),
      seat_capacity: data.seatCapacity,
      purchase_price: data.purchasePrice * env.priceConversionRate,
      manufactured_date: manDate,
    };

    const options = {
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': env.apiKey,
      },
      timeout: 3 * 1000,
    };

    axios
      .post(env.apiUrl, quoteRequest, options)
      .then(response => {
        const data = response.data;

        const annualPremium = data.annual_premium;
        const quote = data.quote;

        if (!annualPremium || !quote) {
          throw new Error('Something went wrong');
        }

        // update success state
        setSuccessResponse({ annualPremium, quote });
      })
      .catch(error => {
        // if response is not specified it means that
        // the error came from throw exception block
        if (error.response === void 0) {
          setErrorResponse({
            errorMessage: 'Request Error',
            reasons: [error.message],
          });
          return;
        }

        // process errors based on auth and etc
        const response = error.response;
        const data = response.data;

        const errorMessage = data.errorMessage;
        const errors = data.errors;

        if (!errorMessage || !errors) {
          setErrorResponse({
            errorMessage: 'Request Error',
            reasons: ['Something went wrong'],
          });
          return;
        }

        const errorItem = errors[0];

        if (errorItem.type === 'validation') {
          const reasons = errorItem.reasons;

          reasons.forEach(reasonItem => {
            const mappedFieldName = quoteFieldsMap[reasonItem.name];
            const reason = reasonItem.reason;

            setFieldError(mappedFieldName, reason);
          });
        } else {
          setErrorResponse({ errorMessage, ...errorItem });
        }
      })
      .then(() => {
        setSubmitting(false);
      });
  };

  // convert jet model options into {label, value}
  const jetModelOptions = JetModelOptions.map(opt => ({
    label: opt,
    value: opt,
  }));

  return (
    <>
      <Formik
        initialValues={quoteInitialValues}
        validationSchema={quoteValidationSchema}
        validateOnMount={true}
        onSubmit={(data, { setSubmitting, setFieldError }) =>
          handleOnSubmit(data, setSubmitting, setFieldError)
        }
      >
        {({ isSubmitting, isValid }) => (
          <Form id="quote-form">
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Request Quote
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6} id="owner-name-box">
                    <Field
                      name="ownerName"
                      label="Owner Name"
                      component={UiTextFormField}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} id="jet-model-box">
                    <Field
                      name="jetModel"
                      label="Jet Model"
                      options={jetModelOptions}
                      id="jet-model-select"
                      component={UiSelectFormField}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} id="seat-capacity-box">
                    <Field
                      name="seatCapacity"
                      label="Jet Seat Capacity"
                      type="number"
                      min="1"
                      component={UiTextFormField}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} id="man-date-box">
                    <Field
                      name="manufacturedDate"
                      id="manufactured-date"
                      label="Manufactured Date"
                      format="MM/DD/Y"
                      mask="__/__/____"
                      maxDate={moment()}
                      component={UiDateFormField}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} id="purchase-price-box">
                    <Field
                      name="purchasePrice"
                      label="Purchase Price"
                      type="number"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                      component={UiTextFormField}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} id="broker-email-box">
                    <Field
                      name="brokerEmail"
                      label="Broker Email"
                      type="email"
                      component={UiTextFormField}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  startIcon={<Icon>flight_takeoff</Icon>}
                  disabled={isSubmitting || !isValid}
                >
                  Request Quote
                </Button>
              </CardActions>

              {isSubmitting && (
                <LinearProgress id="progress-bar" variant="query" />
              )}
            </Card>
          </Form>
        )}
      </Formik>
      {successResponse && <UiAnnualPremiumCard {...successResponse} />}

      {errorResponse && <UiErrorMessageCard {...errorResponse} />}
    </>
  );
};

export default FeatureQuotePage;
