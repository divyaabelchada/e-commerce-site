import { Divider, Grid, Typography } from "@material-ui/core";
import React from "react";

function SingleProduct(props) {
  const discountPrice =
    props.productPrice - (props.productPrice / 100) * props.discount;

  return (
    <div>
      <Grid container alignItems="flex-start">
        <Grid item xs={6}>
          <Grid container alignItems="center" justify="flex-start">
            <Grid item xs={8}>
              <h3>{props.productName} </h3>
            </Grid>
            <Grid item xs={9}>
              <p> {props.description} </p>
              <p> {props.brand} </p>
              <br />
              <Divider /> <br />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h6" color="primary">
                Rs&nbsp;{discountPrice.toFixed(2)}{" "}
                <s style={{ color: "#828387" }}>
                  {" "}
                  <small> {props.productPrice} </small>{" "}
                </s>
                &nbsp;
                <span style={{ color: "#E78D1B" }}>
                  {" "}
                  ({props.discount}% OFF)
                </span>
              </Typography>
            </Grid>
            {/* <Grid item xs={10}>
                  {props.variantValue ? (
                    Object.keys(variants).map((key, i) => (
                      <p>
                        {" "}
                        <b> {key} : </b> {variants[key]}{" "}
                      </p>
                    ))
                  ) : (
                    <></>
                  )}
                </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img src={props.imageUrl} />
        </Grid>
        <Grid item xs={9}>
          <div
            id="prod-desc"
            dangerouslySetInnerHTML={{
              __html: props.longDescription,
            }}
          />

          {/* <p> {} </p> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default SingleProduct;
