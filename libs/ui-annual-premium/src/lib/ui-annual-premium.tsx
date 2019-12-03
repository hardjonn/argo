import React, { FC } from 'react';
import moment from 'moment';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import { QuoteApiModel } from '@argo/data';

import './ui-annual-premium.scss';

/* eslint-disable-next-line */
export interface UiAnnualPremiumProps {
  annualPremium: number;
  quote: QuoteApiModel;
}

export const UiAnnualPremium: FC<UiAnnualPremiumProps> = ({
  quote,
  annualPremium,
}) => {
  const manDate = moment(quote.manufactured_date).format('MM/DD/Y');
  return (
    <Card style={{ marginTop: '32px' }} id="quote-success">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Requested Quote
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <b>Owner Name:</b> {quote.owner_name}
          </Grid>
          <Grid item xs={12} md={6}>
            <b>Jet Model:</b> {quote.model}
          </Grid>
          <Grid item xs={12} md={6}>
            <b>Jet Seat Capacity:</b> {quote.seat_capacity}
          </Grid>
          <Grid item xs={12} md={6}>
            <b>Manufactured Date:</b> {manDate}
          </Grid>
          <Grid item xs={12} md={6}>
            <b>Purchase Price:</b> {quote.purchase_price}
          </Grid>
          <Grid item xs={12} md={6}>
            <b>Broker Email:</b> {quote.broker_email}
          </Grid>
          <Grid item xs={12} md={6}>
            {' '}
            <Typography variant="h4">
              Annual Premium: ${annualPremium.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UiAnnualPremium;
