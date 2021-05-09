import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { Favorite, FavoriteBorderOutlined } from "@material-ui/icons";
import React, { useState } from "react";

//firebase
import { db, auth, provider } from "../../firebase";
import firebase from "firebase";

//redux
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

//routing
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

function CustomProductCardTwo(props) {
  const [{ user, notifs }, dispatch] = useStateValue();

  const discountPrice =
    Number(props.price) - Number(props.price / 100) * Number(props.discount);

  const [qty, setQty] = useState("1");

  const [wishlist, setWishlist] = useState(props.wishlist);

  const addToCart = () => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("cart")
        .add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          imageUrl: props.imageUrl,
          productName: props.productName,
          price: discountPrice,
          id: props.id,
          qty: 1,
        })
        .then(() => {
          //alert("Product Added Successfully!");
          dispatch({
            type: actionTypes.SET_NOTIFS,
            notifs: {
              value: true,
              error: false,
              msg: "1 Product Added to cart",
            },
          });
        })
        .catch((error) => {
          //alert(error);
          console.log(error);
          dispatch({
            type: actionTypes.SET_NOTIFS,
            notifs: { value: false, error: true, msg: error },
          });
        });
    } else {
      //alert("Please login to continue");
      dispatch({
        type: actionTypes.SET_NOTIFS,
        notifs: { value: false, error: true, msg: "Please login to continue" },
      });
    }
  };

  return (
    <div>
      <Paper id="product-card-one" elevation={2}>
        {wishlist ? (
          <Favorite id="heart-icon" onClick={() => setWishlist(!wishlist)} />
        ) : (
          <FavoriteBorderOutlined
            id="heart-icon"
            onClick={() => setWishlist(!wishlist)}
          />
        )}

        <Grid container alignItems="flex-start" justify="center">
          <Grid item xs={12}>
            <div id="image-div">
              <Link to={`/search-product/${props.id}`}>
                <img src={props.imageUrl} id="product-img" />
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} style={{ height: 70 }}>
            <Typography>{props.productName}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              spacing={1}
            >
              <Grid item xs={4} id="qty">
                <TextField
                  fullWidth
                  type="number"
                  variant="outlined"
                  placeholder="qty"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                />
              </Grid>
              <Grid item xs={8}>
                <p style={{ textAlign: "right" }}>
                  <big>
                    <b> Rs {discountPrice}</b>&nbsp;
                  </big>
                  <s style={{ color: "orange" }}>
                    <small> {props.price} </small>
                  </s>
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "0.2rem" }}>
            <Button
              fullWidth
              color="primary"
              style={props.style}
              variant={props.variant}
              onClick={() => addToCart()}
            >
              Add to cart
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default CustomProductCardTwo;
