import React from "react";
import "./css/Navbar.css";
/* import { Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.less"; */

import {
  Badge,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
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
  SearchBoxFour,
  SearchBoxOne,
  SearchBoxThree,
  SearchBoxTwo,
} from "./SearchBoxes";
import Drawer from "./Drawer";
import {
  colorTheme,
  showDrawer,
  SearchBox,
  actionType,
  AppName,
} from "../../App";
import { grey } from "@material-ui/core/colors";
import NavbarActions from "./NavbarComponents/NavbarActions";

export function Navbar() {
  return (
    <div>
      <div id="navbar" style={{ backgroundColor: "#fafafa" }}>
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
              {/* <h2>App Studio</h2> */}
              <Typography variant="h6"> {AppName} </Typography>
            </Link>
          </Grid>
          <Grid item xs={showDrawer ? 4 : 5}>
            {SearchBox === 1 ? (
              <SearchBoxOne />
            ) : SearchBox === 2 ? (
              <SearchBoxTwo />
            ) : SearchBox === 3 ? (
              <SearchBoxThree />
            ) : SearchBox === 4 ? (
              <SearchBoxFour />
            ) : (
              <SearchboxFive />
            )}
          </Grid>
          <Grid item md={5}>
            <NavbarActions actionType={actionType} />{" "}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
