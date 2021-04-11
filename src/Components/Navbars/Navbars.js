import React from "react";

/* import { Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.less"; */

import { Container, Grid, IconButton } from "@material-ui/core";
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

export function NavbarOne() {
  return (
    <div>
      <div id="navbar">
        <Container>
          <Grid container alignItems="center">
            <Grid item md={6} style={{ textAlign: "left" }}>
              <h2>App Studio</h2>
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

export function NavbarTwo() {
  return (
    <div>
      <Grid
        style={{ padding: "0 2rem" }}
        container
        alignItems="center"
        spacing={1}
        justify="center"
      >
        <Grid item md={2} style={{ textAlign: "left" }}>
          <h2>App Studio</h2>
        </Grid>
        <Grid item md={4}>
          <TextField
            placeholder="What are you looking for today?"
            id="search"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {" "}
                  <IconButton>
                    <Search />{" "}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </Grid>

        <Grid item md={6}>
          <Grid container justify="flex-end" spacing={2}>
            <Grid item xs={3}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={4}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <p style={{ margin: 0 }}>
                    <small>Location</small>
                    <br />
                    Mumbai, India
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Avatar>
                <ShoppingCart />
              </Avatar>
            </Grid>
            <Grid item>
              <Avatar>
                <Favorite />
              </Avatar>
            </Grid>
            <Grid item>
              <Avatar>
                <Notifications />
              </Avatar>
            </Grid>
            <Grid item>
              <Avatar>
                <Person />
              </Avatar>
            </Grid>
            <Grid item>
              <Avatar>
                <Translate />
              </Avatar>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export function NavbarThree() {
  return <div>Navbar three</div>;
}
