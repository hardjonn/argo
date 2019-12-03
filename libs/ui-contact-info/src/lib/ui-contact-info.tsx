import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Box } from '@material-ui/core';

import './ui-contact-info.scss';

/* eslint-disable-next-line */
export interface UiContactInfoProps {
  title: string;
  header: string;
  address1: string;
  address2: string;
  phone: string;
  fax: string;
  email: string;
}

const useStyles = makeStyles({
  contactBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactItem: {
    marginLeft: '16px',
  },
});

export const UiContactInfo = (props: UiContactInfoProps) => {
  const classes = useStyles({});

  return (
    <>
      <Typography variant="h5" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="h6" id="contact__header">
        {props.header}
      </Typography>
      <Box>
        <Box>{props.address1}</Box>
        <Box>{props.address2}</Box>
      </Box>
      <Box className={classes.contactBox}>
        <Typography variant="h6" component="span">
          Phone
        </Typography>
        <Box className={classes.contactItem}>
          <a href={`tel:${props.phone}`}>{props.phone}</a>
        </Box>
      </Box>
      <Box className={classes.contactBox}>
        <Typography variant="h6" component="span">
          Fax
        </Typography>
        <Box className={classes.contactItem}>
          <a href={`tel:${props.fax}`}>{props.fax}</a>
        </Box>
      </Box>
      <Box className={classes.contactBox}>
        <Typography variant="h6" component="span">
          Email
        </Typography>
        <Box className={classes.contactItem}>
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </Box>
      </Box>
    </>
  );
};

export default UiContactInfo;
