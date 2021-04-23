import React, { useState, useEffect } from "react";
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
  PersonAdd,
  PersonPin,
  AccountCircle,
  EditLocation,
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
import { grey } from "@material-ui/core/colors";
import { useStateValue } from "../../../StateProvider";

function NavbarActions({ actionType, options }) {
  const [{ user, userDetails, notifs }, dispatch] = useStateValue();

  // const options = {
  //   location: true,
  //   profile: true,
  //   cart: true,
  //   language: true,
  //   notifications: true,
  //   wishlist: true,
  // };

  return (
    <div style={{ paddingRight: "1rem" }}>
      {actionType === "1" ? (
        <Grid container justify="flex-end" spacing={2}>
          {/* ===========location ========= */}
          {options.location ? (
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
          ) : (
            <></>
          )}
          {/* ===========location ========= */}

          {/* ===========wishlist ========= */}

          {options.wishlist ? (
            <Grid item>
              <Badge
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                overlap="circle"
                badgeContent={0}
                color="default"
              >
                <NavLink
                  to="/user-wishlist"
                  activeStyle={{
                    backgroundColor: "#fff",
                    boxShadow: "0px 0px 5px #b0bec5",
                    borderRadius: "50%",
                  }}
                >
                  <Avatar style={{ backgroundColor: "#fff" }}>
                    <Favorite color="primary" />
                  </Avatar>
                </NavLink>
              </Badge>
            </Grid>
          ) : (
            <></>
          )}
          {/* ===========wishlist ========= */}

          {/* =========== notifications ========= */}
          {options.notifications ? (
            <Grid item>
              <Badge
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                overlap="circle"
                badgeContent={1}
                color="default"
              >
                <NavLink
                  to="/notifications"
                  activeStyle={{
                    backgroundColor: "#fff",
                    boxShadow: "0px 0px 5px #b0bec5",
                    borderRadius: "50%",
                  }}
                >
                  <Avatar style={{ backgroundColor: "#fff" }}>
                    <Notifications color="primary" />
                  </Avatar>
                </NavLink>
              </Badge>
            </Grid>
          ) : (
            <></>
          )}
          {/* =========== notifications ========= */}

          {/* =========== cart ========= */}
          {options.cart ? (
            <Grid item>
              <Badge
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                overlap="circle"
                badgeContent={1}
                color="default"
              >
                <NavLink
                  to="/cart-items"
                  activeStyle={{
                    backgroundColor: "#fff",
                    boxShadow: "0px 0px 5px #b0bec5",
                    borderRadius: "50%",
                  }}
                >
                  <Avatar style={{ backgroundColor: "#fff" }}>
                    <ShoppingCart color="primary" />
                  </Avatar>
                </NavLink>
              </Badge>
            </Grid>
          ) : (
            <></>
          )}

          {/* =========== cart ========= */}

          {/* =========== profile ========= */}
          {options.profile ? (
            <Grid item>
              <Badge
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                overlap="circle"
                badgeContent={0}
                color="default"
              >
                <NavLink
                  to={!user ? "/user-login" : "/user-profile"}
                  activeStyle={{
                    backgroundColor: "#fff",
                    boxShadow: "0px 0px 5px #b0bec5",
                    borderRadius: "50%",
                  }}
                >
                  <Avatar style={{ backgroundColor: "#fff" }}>
                    <Person color="primary" />
                  </Avatar>
                </NavLink>
              </Badge>
            </Grid>
          ) : (
            <></>
          )}

          {options.language ? (
            <Grid item>
              <Avatar
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <Translate color="primary" />
              </Avatar>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      ) : actionType === "2" ? (
        <Grid container alignItems="center" spacing={1} justify="flex-end">
          {options.location ? (
            <Grid item>
              <IconButton>
                <EditLocation color="primary" />
              </IconButton>
            </Grid>
          ) : (
            <></>
          )}

          {options.wishlist ? (
            <Grid item>
              <NavLink
                to="/user-wishlist"
                activeStyle={{
                  borderBottom: "2px solid grey",
                  paddingBottom: "1rem",
                }}
              >
                <IconButton>
                  <Favorite color="primary" />
                </IconButton>
              </NavLink>
            </Grid>
          ) : (
            <></>
          )}

          {options.cart ? (
            <Grid item>
              <NavLink
                to="/cart-items"
                activeStyle={{
                  borderBottom: "2px solid grey",
                  paddingBottom: "1rem",
                }}
              >
                <IconButton>
                  <Badge
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    badgeContent={1}
                    color="default"
                  >
                    <ShoppingCart color="primary" />
                  </Badge>
                </IconButton>
              </NavLink>
            </Grid>
          ) : (
            <></>
          )}

          {options.notifications ? (
            <Grid item>
              <NavLink
                to="/notifications"
                activeStyle={{
                  borderBottom: "2px solid grey",
                  paddingBottom: "1rem",
                }}
              >
                <IconButton>
                  <Badge
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    badgeContent={1}
                    color="default"
                  >
                    <Notifications color="primary" />
                  </Badge>
                </IconButton>
              </NavLink>
            </Grid>
          ) : (
            <></>
          )}

          {options.profile ? (
            <Grid item>
              <NavLink
                to={!user ? "/user-login" : "/user-profile"}
                activeStyle={{
                  borderBottom: "2px solid grey",
                  paddingBottom: "1rem",
                }}
              >
                <IconButton>
                  <AccountCircle color="primary" />
                </IconButton>
              </NavLink>
            </Grid>
          ) : (
            <></>
          )}

          {options.language ? (
            <Grid item>
              <IconButton>
                <AccountCircle color="primary" />
              </IconButton>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      ) : (
        /* third type of actions */
        <Grid container justify="flex-end" spacing={3}>
          {options.location ? (
            <Grid item>
              <Typography variant="body2">Location</Typography>
            </Grid>
          ) : (
            <></>
          )}

          {options.notifications ? (
            <Grid item>
              <NavLink
                className="links"
                to="/notifications"
                activeClassName="current-link"
              >
                <Typography variant="body2" color="primary">
                  Notifications
                </Typography>
              </NavLink>{" "}
            </Grid>
          ) : (
            <></>
          )}

          {options.cart ? (
            <Grid item>
              <NavLink
                className="links"
                to="/cart-items"
                activeClassName="current-link"
              >
                <Typography variant="body2" color="primary">
                  Cart
                </Typography>
              </NavLink>
            </Grid>
          ) : (
            <></>
          )}

          {options.wishlist ? (
            <Grid item>
              <NavLink
                className="links"
                to="/user-wishlist"
                activeClassName="current-link"
              >
                <Typography variant="body2" color="primary">
                  Wishlist
                </Typography>
              </NavLink>
            </Grid>
          ) : (
            <></>
          )}

          {options.profile ? (
            <Grid item>
              {!user ? (
                <NavLink
                  className="links"
                  to="/user-login"
                  activeClassName="current-link"
                >
                  <Typography variant="body2" color="primary">
                    Login
                  </Typography>
                </NavLink>
              ) : (
                <NavLink
                  className="links"
                  to="/user-profile"
                  activeClassName="current-link"
                >
                  <Typography variant="body2" color="primary">
                    {" "}
                    {!userDetails ? "Profile" : userDetails.fName}
                  </Typography>
                </NavLink>
              )}
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      )}
    </div>
  );
}

export default NavbarActions;
