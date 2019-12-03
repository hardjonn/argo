import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Container } from '@material-ui/core';
import UiContactInfo from '@argo/ui-contact-info';

import './feature-contact-info.scss';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const FeatureContactInfo = () => {
  const classes = useStyles({});

  return (
    <Container maxWidth="sm">
      <Card className={classes.card}>
        <CardContent>
          <UiContactInfo
            title="Contact Us"
            header="Xavier Group"
            phone="(951) 785-0303"
            fax="(951) 785-0305"
            email="contact@xavier.com"
            address1="45 Wonder Road"
            address2="Brooklyn, NY 11234"
          ></UiContactInfo>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FeatureContactInfo;
