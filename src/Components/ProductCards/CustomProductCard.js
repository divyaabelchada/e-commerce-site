import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { Favorite, FavoriteBorderOutlined } from "@material-ui/icons";
import React from "react";

function CustomProductCard(props) {
  //const [{ user, notifs }, dispatch] = useStateValue();

  const discountPrice =
    Number(props.price) - Number(props.price / 100) * Number(props.discount);

  return (
    <div>
      <Paper id="product-card-one" elevation={2}>
        {props.wishlist ? (
          <Favorite id="heart-icon" />
        ) : (
          <FavoriteBorderOutlined id="heart-icon" />
        )}

        <Grid container alignItems="flex-start" justify="center">
          <Grid item xs={12}>
            <div id="image-div">
              <img src={props.imageUrl} id="product-img" />
            </div>
          </Grid>
          <Grid item xs={12} style={{ height: 70 }}>
            <Typography> {props.productName}</Typography>
          </Grid>

          <Grid item xs={7}>
            <Button
              fullWidth
              color="primary"
              style={props.style}
              variant={props.variant}
            >
              Add to cart
            </Button>
          </Grid>
          <Grid item xs={5}>
            <p style={{ textAlign: "right" }}>
              <big>
                <b> Rs {discountPrice}</b>&nbsp;
              </big>
              <s>
                <small> {props.price} </small>
              </s>
            </p>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default CustomProductCard;
