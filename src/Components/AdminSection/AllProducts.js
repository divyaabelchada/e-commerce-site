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
import { ProductCardThree, ProductCardTwo } from "../ProductCards/ProductCards";
import { Delete, Favorite } from "@material-ui/icons";

//dialog
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function AllProducts() {
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

  const deleteFunction = (id) => {
    db.collection("products").doc(id).delete();
  };

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: "center", margin: "5rem" }}>
          <CircularProgress />
        </div>
      ) : (
        <div style={{ height: "95vh", width: "100%" }}>
          {!products ? (
            <div>
              <Typography>No products yet : (</Typography>{" "}
            </div>
          ) : (
            <div>
              <Grid container spacing={2}>
                {products.map(({ id, product }) => (
                  <Grid item xs={3}>
                    <Card
                      elevation={1}
                      id="product-card-two"
                      style={{ padding: "0.5rem" }}
                    >
                      <Grid container alignItems="flex-start" justify="center">
                        <Grid item xs={12}>
                          <div id="image-div">
                            <img src={product.imageUrl} id="product-img" />
                          </div>
                          {/*  <Skeleton variant="rect" height={250} width={"100%"} /> */}
                        </Grid>
                        <Grid item xs={8} style={{ height: 70 }}>
                          {/* <p>
                       {" "}
                       <b> {props.productName} </b>
                     </p> */}
                          <Typography> {product.productName}</Typography>
                          <Typography>
                            <small> {product.category} </small>
                          </Typography>
                        </Grid>

                        <Grid item xs={4}>
                          <p style={{ textAlign: "right" }}>
                            {" "}
                            <big>
                              {" "}
                              <b> Rs {product.price}</b>&nbsp;
                            </big>{" "}
                          </p>
                          <div style={{ textAlign: "right" }}>
                            <IconButton onClick={() => deleteFunction(id)}>
                              <Delete />
                            </IconButton>
                          </div>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AllProducts;
