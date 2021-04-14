import React from "react";
import {
  Button,
  Card,
  Chip,
  Container,
  Grid,
  IconButton,
  Paper,
} from "@material-ui/core";

import "./css/ProductCard.css";
import {
  Favorite,
  LoyaltyOutlined,
  Star,
  StarBorderOutlined,
} from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";

export function ProductCardone(props) {
  return (
    <div>
      <Paper id="product-card-one">
        <Favorite
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            color: "red",
          }}
        />
        <Grid container alignItems="flex-start" justify="center">
          <Grid item xs={12}>
            <div id="image-div">
              <img src={props.imageUrl} id="product-img" />{" "}
            </div>
            {/*  <Skeleton variant="rect" height={250} width={"100%"} /> */}
          </Grid>
          <Grid item xs={12} style={{ height: 70 }}>
            <p>
              {" "}
              <b> {props.productName} </b>
            </p>
          </Grid>

          <Grid item xs={6}>
            <Button fullWidth color="secondary" variant="outlined">
              Add to cart
            </Button>
          </Grid>
          <Grid item xs={6}>
            <p style={{ textAlign: "right" }}>
              {" "}
              <big>
                {" "}
                <b> Rs {props.price}</b>&nbsp;
              </big>{" "}
              <s>
                <small> {props.price - 200} </small>{" "}
              </s>
            </p>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export function ProductCardTwo(props) {
  return (
    <div>
      {" "}
      <Card elevation={0} id="product-card-two">
        <Favorite
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            color: "red",
          }}
        />
        <Grid container alignItems="flex-start" justify="center">
          <Grid item xs={12}>
            <div id="image-div">
              <img src={props.imageUrl} id="product-img" />
            </div>
            {/*  <Skeleton variant="rect" height={250} width={"100%"} /> */}
          </Grid>
          <Grid item xs={12} style={{ height: 70 }}>
            <p>
              {" "}
              <b> {props.productName} </b>
            </p>
          </Grid>

          <Grid item xs={6}>
            <Button fullWidth color="secondary" variant="outlined">
              Add to cart
            </Button>
          </Grid>
          <Grid item xs={6}>
            <p style={{ textAlign: "right" }}>
              {" "}
              <big>
                {" "}
                <b> Rs {props.price}</b>&nbsp;
              </big>{" "}
              <s>
                <small> {props.price - 200} </small>{" "}
              </s>
            </p>
          </Grid>
        </Grid>
      </Card>{" "}
    </div>
  );
}
export function ProductCardThree(props) {
  return (
    <div>
      <Card elevation={0} id="product-card-three">
        <Favorite
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            color: "red",
          }}
        />
        <Grid container alignItems="center" justify="center" spacing={2}>
          <Grid item xs={4}>
            <div id="image-div">
              <img src={props.imageUrl} id="product-img" />
            </div>
            {/*  <Skeleton variant="rect" height={250} width={"100%"} /> */}
          </Grid>
          <Grid item xs={8}>
            <Chip
              icon={<LoyaltyOutlined />}
              label={props.sale}
              color="primary"
              size="small"
            />

            <p>
              {" "}
              <b> {props.productName} </b>
            </p>
            <p style={{ minHeight: 50 }}> {props.description} </p>
            <Grid container>
              <Grid item xs={6}>
                <Button fullWidth color="secondary" variant="outlined">
                  Add to cart
                </Button>
              </Grid>
              <Grid item xs={6}>
                <p style={{ textAlign: "right" }}>
                  {" "}
                  <big>
                    {" "}
                    <b> Rs {props.price}</b>&nbsp;
                  </big>{" "}
                  <s>
                    <small> {props.price - 200} </small>{" "}
                  </s>
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>{" "}
    </div>
  );
}
