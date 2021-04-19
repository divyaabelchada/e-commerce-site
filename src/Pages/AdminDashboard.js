import { Grid, Icon, IconButton } from "@material-ui/core";
import {
  AccountBox,
  AccountCircle,
  AddBox,
  Apps,
  Group,
  MoveToInbox,
  Publish,
  SettingsApplications,
  Shop,
} from "@material-ui/icons";
import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    backgroundBlendMode: "screen",
  },
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function AdminDashboard() {
  const classes = useStyles();

  const tabs = [
    "Dashboard",
    "Products",
    "Upload Products",
    "Orders",
    "Users",
    "Settings",
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  //   className={clsx(classes.chat__message, {
  //     [classes.chat__receiver]: message.name == user.displayName,
  // })}

  return (
    <div>
      <Grid container alignItems="flex-start">
        <Grid item xs={3}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Admin Dashboard
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem
              className={classes.listItem}
              button
              onClick={() => setCurrentTab(tabs[0])}
            >
              <ListItemIcon>
                <Apps color="primary" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem
              className={classes.listItem}
              button
              onClick={() => setCurrentTab(tabs[1])}
            >
              <ListItemIcon>
                <Shop color="primary" />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem
              className={classes.listItem}
              button
              onClick={() => setCurrentTab(tabs[2])}
            >
              <ListItemIcon>
                <AddBox color="primary" />
              </ListItemIcon>
              <ListItemText primary="Upload Products" />
            </ListItem>

            <ListItem
              className={classes.listItem}
              button
              onClick={() => setCurrentTab(tabs[3])}
            >
              <ListItemIcon>
                <MoveToInbox color="primary" />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>

            <ListItem
              className={classes.listItem}
              button
              onClick={() => setCurrentTab(tabs[4])}
            >
              <ListItemIcon>
                <Group color="primary" />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>

            <ListItem
              className={classes.listItem}
              button
              onClick={() => setCurrentTab(tabs[5])}
            >
              <ListItemIcon>
                <SettingsApplications color="primary" />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={9}>
          {/* switching */}
          {currentTab === tabs[0] ? (
            <div>dashboard</div>
          ) : currentTab === tabs[1] ? (
            <div>tabs 0</div>
          ) : currentTab === tabs[2] ? (
            <div>tabs 2</div>
          ) : currentTab === tabs[3] ? (
            <div>tabs 3</div>
          ) : currentTab === tabs[4] ? (
            <div>user</div>
          ) : currentTab === tabs[5] ? (
            <div>setting</div>
          ) : (
            <div></div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminDashboard;
