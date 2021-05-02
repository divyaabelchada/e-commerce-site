import {
  Grid,
  TextField,
  InputAdornment,
  Input,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import React from "react";
import "./css/Footer.css";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  Mail,
  MailOutline,
  Pinterest,
  Twitter,
} from "@material-ui/icons";

function Footer() {
  return (
    <div id="footer">
      <Grid
        container
        spacing={2}
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          style={{ marginTop: "auto", marginBottom: "auto" }}
          id="logo-section"
        >
          {/* logo and copyright */}
          <h1>Logo</h1>
          <h3 style={{ color: "#7f7f7f" }}>
            COPYRIGHT © 2021 APRIL 1 <br />
            ALL RIGHTS RESERVED
          </h3>
        </Grid>
        <Grid item xs={12} sm={6} md={4} id="content-section">
          {/* about us and Shopguide */}
          <Grid container spacing={1} justify="flex-start">
            <Grid item xs={6}>
              <List id="footer-list">
                <ListItem>
                  <ListItemText primary={<h2 id="list-title">About Us</h2>} />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="About us" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Offices" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Work with us" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Our policies" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Affinity card" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} id="content-section">
              <List id="footer-list">
                <ListItem>
                  <ListItemText primary={<h2 id="list-title">Shopguide </h2>} />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Payment" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Returns" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Gift Card" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Guest purchase" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Terms & Condions" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} id="news-letter-section">
          {/*  NewsLetter */}
          <h2 id="list-title">NewsLetter </h2>
          <p>SUBSCRIBE TO OUR NEWSLETTER</p>
          <div id="news-letter">
            <Input
              fullWidth={true}
              placeholder="Enter your email"
              disableUnderline={true}
              endAdornment={
                <InputAdornment position="end">
                  <MailOutline id="news-letter-icon" />
                </InputAdornment>
              }
            />
          </div>
          <Grid
            container
            alignItems="center"
            justify="flex-start"
            spacing={1}
            id="social-icons-grid"
          >
            <Grid item>
              <Twitter id="social-icons" />
            </Grid>
            <Grid item>
              <Instagram id="social-icons" />
            </Grid>
            <Grid item>
              <Facebook id="social-icons" />
            </Grid>
            <Grid item>
              <Pinterest id="social-icons" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
