import React from "react";
import "./css/Navbar.css";
/* import { Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.less"; */

import { Container, Grid, IconButton, makeStyles } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

import {
  ExpandMore,
  Favorite,
  LocationOn,
  Notifications,
  Person,
  ShoppingCart,
  Translate,
  Search,
  AvTimerSharp,
} from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import {
  SearchboxFive,
  SearchBoxOne,
  SearchBoxThree,
  SearchBoxTwo,
} from "./SearchBoxes";
import Drawer from "./Drawer";
import { colorTheme, showDrawer } from "../../App";
import { grey } from "@material-ui/core/colors";

export function NavbarOne() {
  return (
    <div>
      <div id="navbar" style={{ backgroundColor: "#fafafa" }}>
        <Container>
          <Grid container alignItems="center">
            {showDrawer ? (
              <Grid item xs={1}>
                <Drawer />
              </Grid>
            ) : (
              <></>
            )}

            <Grid item md={2} style={{ textAlign: "left" }}>
              <Link to="/" className="links">
                <h2>App Studio</h2>
              </Link>
            </Grid>
            <Grid item xs={showDrawer ? 3 : 4}>
              <SearchBoxThree />
            </Grid>
            <Grid item md={6}>
              <Grid container justify="flex-end" spacing={2}>
                <Grid item>
                  <h4>Location </h4>
                  {/*  <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <div
                      style={{
                        display: "flex",
                       
                        cursor: "pointer",
                      }}
                    >
                      <h4>User </h4>
                      <ExpandMore />
                    </div>
                  </Dropdown> */}
                </Grid>
                <Grid item>
                  <h4>Cart</h4>
                </Grid>
                <Grid item>
                  <h4>Wishlist</h4>
                </Grid>

                <Grid item>
                  <h4>Your Profile</h4>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    backgrounColor: grey[100],
  },
}));

export function NavbarTwo() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <Grid
        style={{ padding: "0 2rem" }}
        container
        alignItems="center"
        spacing={1}
        justify="center"
      >
        {showDrawer ? (
          <Grid item xs={1}>
            <Drawer />
          </Grid>
        ) : (
          <></>
        )}
        <Grid item md={2} style={{ textAlign: "left" }}>
          <Link to="/" className="links">
            <h2>App Studio</h2>
          </Link>
        </Grid>
        <Grid item md={4}>
          <SearchBoxTwo />
          {/* <SearchboxFive /> */}
        </Grid>

        <Grid item md={showDrawer ? 5 : 6}>
          <Grid container justify="flex-end" spacing={2}>
            <Grid item xs={4}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={3}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <p style={{ margin: 0 }}>
                    <small style={{ margin: 0 }}>Location</small>
                    <br />
                    Mumbai, India
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Avatar
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 5px #b0bec5",
                }}
              >
                <ShoppingCart color="secondary" />
              </Avatar>
            </Grid>
            <Grid item>
              <Avatar
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 5px #b0bec5",
                }}
              >
                <Favorite color="secondary" />
              </Avatar>
            </Grid>
            <Grid item>
              <Avatar
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 5px #b0bec5",
                }}
              >
                <Notifications color="secondary" />
              </Avatar>
            </Grid>
            <Grid item>
              <Avatar
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 5px #b0bec5",
                }}
              >
                <Person color="secondary" />
              </Avatar>
            </Grid>
            <Grid item>
              <Avatar
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 5px #b0bec5",
                }}
              >
                <Translate color="secondary" />
              </Avatar>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export function NavbarThree() {
  return (
    <div>
      <Grid
        style={{ padding: "0 2rem" }}
        container
        alignItems="center"
        spacing={1}
        justify="space-around"
      >
        <Grid item xs={1}>
          <Drawer />
        </Grid>
        <Grid item md={2} style={{ textAlign: "left" }}>
          <Link to="/" className="links">
            <h2>App Studio</h2>
          </Link>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item md={3}>
          <SearchBoxOne />
        </Grid>

        <Grid item md={2}>
          <Grid container alignItems="center" spacing={1} justify="flex-end">
            <Grid item>
              <IconButton>
                <ShoppingCart />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <Notifications />
              </IconButton>
            </Grid>
            <Grid item>
              <Avatar>
                <Person />
              </Avatar>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
