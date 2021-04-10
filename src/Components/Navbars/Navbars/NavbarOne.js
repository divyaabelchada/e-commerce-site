import React from "react";
import { Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.css";

import { Container, Grid } from "@material-ui/core";

import indiaflag from "../../assets/india-flag.jpg";
import { ExpandMore } from "@material-ui/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

function NavbarOne() {
  return (
    <div>
      <div id="header">
        <Container>
          <Grid container alignItems="center" justify="flex-end" spacing={2}>
            <Grid item xs={3} md={2}>
              <Grid container alignItems="center" justify="center">
                <Grid item xs={4} sm={2}>
                  <img
                    src={indiaflag}
                    style={{
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Grid>
                <Grid item xs={8} sm={10}>
                  <h3>+91 8000 161 161 </h3>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <h3>Press release</h3>
            </Grid>
            <Grid item>
              <h3>Our fresh work</h3>
            </Grid>
          </Grid>
        </Container>
        <hr />
      </div>
      <div id="navbar">
        <Container>
          <Grid container alignItems="center">
            <Grid item md={6}>
              <h2>App Studio</h2>
            </Grid>
            <Grid item md={6}>
              <Grid
                container
                alignItems="center"
                justify="flex-end"
                spacing={2}
              >
                <Grid item>
                  <h4>Company</h4>
                </Grid>
                <Grid item>
                  <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <h4>Services </h4>
                      <ExpandMore />
                    </div>
                  </Dropdown>
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

export default NavbarOne;
