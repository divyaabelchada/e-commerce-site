import React from "react";

/* import { Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.less"; */

import { Container, Grid } from "@material-ui/core";

import { ExpandMore } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";

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
                  <NavLink
                    className="links"
                    to="/some-path"
                    activeClassName="navbar-tabs-active"
                  >
                    <h4>Company</h4>
                  </NavLink>
                </Grid>
                <Grid item>
                  <h4>User </h4>
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
                  <h4>Case Study</h4>
                </Grid>
                <Grid item>
                  <h4>Resources</h4>
                </Grid>

                <Grid item>
                  <h4>Contact us</h4>
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
  return <div>Navbar two</div>;
}
export function NavbarThree() {
  return <div>Navbar three</div>;
}
