import {
  Avatar,
  Box,
  Grid,
  Icon,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import {
  AccountBox,
  AccountCircle,
  AddBox,
  Apps,
  Group,
  MoveToInbox,
  Publish,
  Security,
  SettingsApplications,
  Shop,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
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
import { useStateValue } from "../StateProvider";
import AllUsers from "../Components/AdminSection/AllUsers";
import AllProducts from "../Components/AdminSection/AllProducts";
import AllOrders from "../Components/AdminSection/AllOrders";
import ImageUpload from "../Components/AdminSection/ImageUpload";
import UploadProducts from "../Components/AdminSection/UploadProducts";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: theme.palette.secondary.main,
    backgroundBlendMode: "screen",
  },
  listItem: {
    padding: "0.5rem 1rem",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  listItemActive: {
    backgroundColor: "#fff",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  profileCard: {
    padding: theme.spacing(5, 2),
    textAlign: "center",
    backgroundColor: theme.palette.secondary.main,
  },
  avatar: {
    marginTop: theme.spacing(1),
    backgroundColor: "#fff",
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
  const [{ user, admin, notifs, adminDetails }, dispatch] = useStateValue();

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Grid container alignItems="flex-start">
        <Grid item xs={3} style={{ zIndex: 3 }}>
          <div className={classes.profileCard}>
            <Grid container alignItems="center" justify="center" spacing={2}>
              <Avatar className={classes.avatar}>
                <Security color="primary" />
              </Avatar>

              <Grid item xs={12}>
                {!adminDetails ? (
                  <></>
                ) : (
                  <Typography variant="h6">
                    <p style={{ fontWeight: "normal" }}>
                      <small>Welcome back,</small>
                    </p>{" "}
                    <b>
                      {adminDetails.fname} {adminDetails.lname}{" "}
                    </b>{" "}
                    <br />
                  </Typography>
                )}
              </Grid>
            </Grid>
          </div>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem
              className={clsx(classes.listItem, {
                [classes.listItemActive]: currentTab == tabs[0],
              })}
              button
              onClick={() => setCurrentTab(tabs[0])}
            >
              <ListItemIcon>
                <Apps color="primary" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem
              className={clsx(classes.listItem, {
                [classes.listItemActive]: currentTab == tabs[1],
              })}
              button
              onClick={() => setCurrentTab(tabs[1])}
            >
              <ListItemIcon>
                <Shop color="primary" />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem
              className={clsx(classes.listItem, {
                [classes.listItemActive]: currentTab == tabs[2],
              })}
              button
              onClick={() => setCurrentTab(tabs[2])}
            >
              <ListItemIcon>
                <AddBox color="primary" />
              </ListItemIcon>
              <ListItemText primary="Upload Products" />
            </ListItem>

            <ListItem
              className={clsx(classes.listItem, {
                [classes.listItemActive]: currentTab == tabs[3],
              })}
              button
              onClick={() => setCurrentTab(tabs[3])}
            >
              <ListItemIcon>
                <MoveToInbox color="primary" />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>

            <ListItem
              className={clsx(classes.listItem, {
                [classes.listItemActive]: currentTab == tabs[4],
              })}
              button
              onClick={() => setCurrentTab(tabs[4])}
            >
              <ListItemIcon>
                <Group color="primary" />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>

            <ListItem
              className={clsx(classes.listItem, {
                [classes.listItemActive]: currentTab == tabs[5],
              })}
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
        <Grid item xs={12} md={9} className={classes.dashboardArea}>
          <Box
            bgcolor="primary.main"
            style={{ textAlign: "center", color: "#fff" }}
          >
            <Typography variant="h6"> {currentTab} </Typography>
          </Box>
          {/* switching */}
          {currentTab === tabs[0] ? (
            <div>dashboard</div>
          ) : currentTab === tabs[1] ? (
            <div style={{ padding: "1rem" }}>
              <AllProducts />
            </div>
          ) : currentTab === tabs[2] ? (
            <div>
              {/* <ImageUpload /> */}
              <UploadProducts />
            </div>
          ) : currentTab === tabs[3] ? (
            <div>
              <AllOrders />
            </div>
          ) : currentTab === tabs[4] ? (
            <div>
              <AllUsers />
            </div>
          ) : currentTab === tabs[5] ? (
            <div></div>
          ) : (
            <div></div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminDashboard;
