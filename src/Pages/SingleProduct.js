import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Divider,
  Container,
} from "@material-ui/core";
import { Favorite, FavoriteBorderOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";

//firebase
import { db, auth, provider } from "../firebase";
import firebase from "firebase";

//redux
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

//routing
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";

function SingleProduct() {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [id, setId] = useState(null);
  const [{ user, admin }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("products")
      .doc(productId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //console.log("Document data:", doc.data());
          setId(doc.id);
          setProduct(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [productId]);

  const addToCart = () => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("cart")
        .add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          imageUrl: product.imageUrl,
          productName: product.productName,
          price: discountPrice,
          id: id,
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

  console.log(product);

  const discountPrice = product
    ? product.price - (product.price / 100) * product.discount
    : 0;

  return (
    <div>
      <Container style={{ marginTop: "2rem" }}>
        <Grid container alignItems="flex-start">
          <Grid item xs={6}>
            <Grid container alignItems="center" justify="flex-start">
              <Grid item xs={8}>
                <h3>{product.productName} </h3>
              </Grid>
              <Grid item xs={9}>
                <p> {product.description} </p>
                <p> {product.brand} </p>
                <br />
                <Divider /> <br />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6" color="primary">
                  Rs&nbsp;{discountPrice.toFixed(2)}{" "}
                  <s style={{ color: "#828387" }}>
                    {" "}
                    <small> {product.price} </small>{" "}
                  </s>
                  &nbsp;
                  <span style={{ color: "#E78D1B" }}>
                    {" "}
                    ({product.discount}% OFF)
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
            <div
              id="prod-desc"
              dangerouslySetInnerHTML={{
                __html: product.longDescription,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              style={{
                width: "100%",
                objectFit: "contain",
                maxHeight: "25rem",
              }}
              src={
                product
                  ? product.imageUrl
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png"
              }
            />
            <br />
            <Container maxWidth="xs" style={{ marginTop: "1rem" }}>
              <Grid container alignItems="center" justify="center" spacing={1}>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => addToCart()}
                  >
                    Buy Now
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button fullWidth variant="outlined" color="primary">
                    Wishlist
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SingleProduct;
