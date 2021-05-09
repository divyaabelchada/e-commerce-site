import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import firebase from "firebase";

function Profile() {
  const [{ user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              order: doc.data(),
            }))
          );
        });
      setLoading(false);
      //login
    } else {
      //
    }
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Your Orders</h2>
      <br />
      <Grid container alignItems="center" justify="center">
        <Grid item xs={5}></Grid>
        <Grid item xs={7}>
          <Grid container alignItems="flex-start" justify="center" spacing={2}>
            {orders.map(({ id, order }) => (
              <Grid item xs={6}>
                <Paper style={{ borderRadius: "1rem" }}>
                  <Box
                    bgcolor="secondary.main"
                    id="header"
                    style={{
                      padding: "0.5rem 1rem",
                      borderTopLeftRadius: "1rem",
                      borderTopRightRadius: "1rem",
                    }}
                  >
                    <Grid container alignItems="center" justify="space-between">
                      <Grid item xs={6}>
                        <h3> Order Id #{id.slice(0, 6)}</h3>
                      </Grid>
                      <Grid item xs={6} style={{ textAlign: "right" }}>
                        <h3> Total: {order.amount}</h3>
                      </Grid>
                    </Grid>
                  </Box>
                  <div>
                    {order.products.map(({ id, product }) => (
                      <div style={{ padding: "1rem" }}>
                        <Grid container alignItems="flex-start" spacing={1}>
                          <Grid item xs={2}>
                            <Link
                              to={`/product/${id}`}
                              className="product-name"
                            >
                              <img
                                src={product.imageUrl}
                                style={{
                                  width: "100%",
                                  maxHeight: "6rem",
                                  objectFit: "contain",
                                }}
                              />
                            </Link>
                          </Grid>
                          <Grid item xs={8}>
                            <p style={{ margin: 0 }}>
                              <Link
                                to={`/product/${id}`}
                                className="product-name"
                              >
                                <big>{product.productName}</big> <br />{" "}
                              </Link>
                              <small> {product.description} </small>
                            </p>
                            <p>Qty: {1}</p>
                          </Grid>
                          <Grid item xs={2}>
                            <p>
                              <b>₹ {product.price} </b>
                            </p>
                          </Grid>
                        </Grid>
                        <br />
                        <hr style={{ borderTop: "1px solid #f7f7f7" }} />
                      </div>
                    ))}
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
