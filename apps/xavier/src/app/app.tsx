import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import './app.scss';

import { AppRouting } from './routes';
import UiFooter from '@argo/ui-footer';
import UiAppBar from '@argo/ui-app-bar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export const App: React.FC = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <CssBaseline />

      <UiAppBar />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <AppRouting></AppRouting>
        </Container>
      </main>

      <UiFooter />
    </div>
  );
};

export default App;
