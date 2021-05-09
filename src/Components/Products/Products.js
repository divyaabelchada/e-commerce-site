import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
//firebase
import { db, auth, provider } from "../../firebase";
import {
  ProductCardone,
  ProductCardThree,
  ProductCardTwo,
} from "../ProductCards/ProductCards";
import { Delete, Favorite } from "@material-ui/icons";

//dialog
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
import CustomProductCardTwo from "../ProductCards/CustomProductCardTwo";
import CustomProductCard from "../ProductCards/CustomProductCard";

function ProductsList() {
  const [{ user, admin, notifs, config }, dispatch] = useStateValue();

  const [products, setProducts] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    db.collection("products").onSnapshot((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          product: doc.data(),
        }))
      );
    });
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      {loading ? (
        <div style={{ textAlign: "center", margin: "5rem" }}>
          <CircularProgress />
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          {!products ? (
            <div>
              <Typography>No products yet : (</Typography>{" "}
            </div>
          ) : (
            <div>
              <Grid container justify="center">
                <Grid item xs={10}>
                  <Grid container spacing={1} justify="center">
                    {products.map(({ id, product }) => (
                      <Grid item xs={3}>
                        {config && config.card === "cardOne" ? (
                          <CustomProductCard
                            id={id}
                            imageUrl={product.imageUrl}
                            productName={product.productName}
                            price={product.price}
                            discount={product.discount}
                            product={product}
                            variant={config.variant}
                            style={config.style}
                          />
                        ) : (
                          <CustomProductCardTwo
                            id={id}
                            imageUrl={product.imageUrl}
                            productName={product.productName}
                            price={product.price}
                            discount={product.discount}
                            product={product}
                            variant={config.variant}
                            style={config.style}
                          />
                        )}
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductsList;
