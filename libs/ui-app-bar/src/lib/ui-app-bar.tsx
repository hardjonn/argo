import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import ToolBar from '@material-ui/core/Toolbar';
import {
  Drawer,
  AppBar,
  IconButton,
  Icon,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import './ui-app-bar.scss';

/* eslint-disable-next-line */
export interface UiAppBarProps {}

const useStyles = makeStyles(() => ({
  drawer: {
    width: 240,
  },
  toolbar: {
    paddingRight: 24,
  },
  title: {
    flexGrow: 1,
  },
}));

export const UiAppBar = (props: UiAppBarProps) => {
  const classes = useStyles({});

  const [drawerOpen, setDrawerState] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerState(open);
  };

  return (
    <>
      <AppBar position="fixed">
        <ToolBar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <Icon>menu</Icon>
          </IconButton>

          <Typography
            component="h2"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Xavier
          </Typography>
        </ToolBar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <div className={classes.drawer} onClick={toggleDrawer(false)}>
          <List component="nav">
            <ListItem button key="home" component={Link} to="/">
              <ListItemIcon>
                <Icon>home</Icon>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="quote" component={Link} to="/quote">
              <ListItemIcon>
                <Icon>flight_takeoff</Icon>
              </ListItemIcon>
              <ListItemText primary="Request Quote" />
            </ListItem>
            <ListItem button key="contact_us" component={Link} to="/contact">
              <ListItemIcon>
                <Icon>contacts</Icon>
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default UiAppBar;
