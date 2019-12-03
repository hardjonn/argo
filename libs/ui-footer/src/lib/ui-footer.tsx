import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

import './ui-footer.scss';

/* eslint-disable-next-line */
export interface UiFooterProps {}

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    height: '96px',
    backgroundColor: theme.palette.grey[600],
  },
  footerLinks: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const UiFooter = (props: UiFooterProps) => {
  const classes = useStyles({});

  return (
    <footer className={classes.footer}>
      <Container>
        <Typography className={classes.footerLinks}>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact Us</Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default UiFooter;
