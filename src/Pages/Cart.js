import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Icon,
  IconButton,
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
import { CheckCircleTwoTone, Delete } from "@material-ui/icons";

function Cart() {
  const [{ user }, dispatch] = useStateValue();

  const [step, setStep] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState(0);
  const [total, setTotal] = useState(0);

  /* addresses */
  const [address, setAddress] = useState({});
  const [contact, setContact] = useState("");

  //adding address
  const [formData, setFormData] = useState({
    address_line_1: "",
    address_line_2: "",
    city: "",
    pincode: "",
  });
  const formFunction = (e) => {
    const { name, value } = e.target;
    setFormData((history) => {
      return { ...history, [name]: value };
    });
  };

  /* setting up produccts */

  const [login, setLogin] = useState(user ? false : true);

  const [checkoutButton, setCheckoutButton] = useState(false);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("cart")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              product: doc.data(),
            }))
          );
          setPrices(snapshot.docs.map((doc) => Number(doc.data().price)));
        });
      setLoading(false);
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, []);
  /* end products */

  useEffect(() => {
    if (products.length > 0) {
      setTotal(
        products
          .map(({ id, product }) => Number(product.price))
          .reduce((a, b) => a + b)
      );
    }
  }, [total, products]);

  console.log(formData);

  const [alert, setAlert] = useState({ value: false, msg: "" });

  const checkout = () => {
    if (
      formData.address_line_1 &&
      formData.address_line_2 &&
      contact != "" &&
      formData.pincode &&
      formData.city
    ) {
      setAlert({ value: false, msg: "" });
      setStep(2);
    } else {
      setAlert({ value: true, msg: "Please fill all data" });
    }
  };

  const confirmOrder = () => {
    if (user) {
      if (
        formData.address_line_1 &&
        formData.address_line_2 &&
        contact != "" &&
        formData.pincode &&
        formData.city
      ) {
        db.collection("orders")
          .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            userId: user.uid,
            products: products,
            amount: total,
            address: formData,
          })
          .then(() => {
            db.collection("users")
              .doc(user.uid)
              .collection("orders")
              .add({
                products: products,
                amount: total,
                address: formData,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              })
              .then(() => {
                setProducts([]);
                setFormData({
                  address_line_1: "",
                  address_line_2: "",
                  city: "",
                  pincode: "",
                });
              })
              .catch((error) => {
                setAlert({ value: false, msg: error });
              });
          })
          .catch((error) => {
            setAlert({ value: false, msg: error });
          });
      }
    } else {
      setAlert({ value: true, msg: "Please login to continue" });
    }
  };

  const deleteItem = (doc, price) => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("cart")
        .doc(doc)
        .delete()
        .then(() => {
          setTotal(total - Number(price));
          alert("item deleted");
        })
        .catch((error) => {
          setAlert({ value: false, msg: error });
        });
    } else {
      setAlert({ value: true, msg: "Please login to continue" });
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          {/* forms n stuffs */}
          <Box
            bgcolor="secondary.main"
            style={{ width: "100%", padding: "1rem" }}
          >
            <h3>Add Address</h3>
            <Divider />
            <br />
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={6}>
                <div style={{ backgroundColor: "#fff", borderRadius: "2px" }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="address line 1"
                    name="address_line_1"
                    onChange={formFunction}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{ backgroundColor: "#fff", borderRadius: "2px" }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="address line 2"
                    name="address_line_2"
                    onChange={formFunction}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{ backgroundColor: "#fff", borderRadius: "2px" }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="City"
                    name="city"
                    onChange={formFunction}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <div style={{ backgroundColor: "#fff", borderRadius: "2px" }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Pincode"
                    type="number"
                    name="pincode"
                    onChange={formFunction}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{ backgroundColor: "#fff", borderRadius: "2px" }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Country"
                    name="country"
                    onChange={formFunction}
                  />{" "}
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{ backgroundColor: "#fff", borderRadius: "2px" }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Contact"
                    type="number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <h3>Payment Method</h3>
            <Divider />
            <br />
            <Button variant="outlined" style={{ backgroundColor: "#fff" }}>
              <span>
                <img
                  src="https://www.tech101.in/wp-content/uploads/2017/12/000-paytm.png"
                  style={{ height: "1.5rem", objectFit: "contain" }}
                />
              </span>
            </Button>
            &nbsp;
            <Button variant="outlined" style={{ backgroundColor: "#fff" }}>
              <span>
                <img
                  src="https://pay.google.com/about/business/static/images/logos/logo-gp3.svg"
                  style={{ height: "1.5rem", objectFit: "contain" }}
                />
              </span>
            </Button>
            &nbsp;
            <Button variant="outlined" style={{ backgroundColor: "#fff" }}>
              <span>
                <img
                  src="https://laudco.com/storage/case-studies/July2019/gyKfHOjRAPp7JiqiAT01.png"
                  style={{ height: "1.5rem", objectFit: "contain" }}
                />
              </span>
            </Button>
            &nbsp;
            <Button
              variant="outlined"
              style={{ backgroundColor: "#fff" }}
              onClick={() => {
                setCheckoutButton(!checkoutButton);
              }}
            >
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Cash On Delivery
              </span>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4} style={{}}>
          {/* order summary and checkout */}

          {products.length > 0 ? (
            <Box style={{ padding: "1rem" }}>
              <h3>Order Summary</h3>
              <Divider />
              <br />
              <div>
                {products.map(({ id, product }) => (
                  <div>
                    <Grid container alignItems="flex-start">
                      <Grid item xs={2}>
                        <Link to={`/product/${id}`} className="product-name">
                          <img
                            src={product.imageUrl}
                            style={{
                              width: "100%",
                              objectFit: "contain",
                              borderRadius: "1rem",
                              padding: "0.5rem",
                            }}
                          />
                        </Link>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography style={{ margin: "1rem 0.5rem" }}>
                          <Link to={`/product/${id}`} className="product-name">
                            <big>{product.productName}</big>{" "}
                          </Link>{" "}
                          <br />
                          <small>Qty: {1} </small>
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <IconButton
                          onClick={() => deleteItem(id, product.price)}
                        >
                          <Delete />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </div>
                ))}{" "}
                <br />
                <Divider />
                <br />
                <div>
                  <Grid container justify="space-between" spacing={1}>
                    <Grid item xs={12}>
                      <p>
                        <b>
                          <p>Items({products.length})</p>
                        </b>
                      </p>
                      <br />
                      <Divider />
                    </Grid>
                    <Grid item xs={7}>
                      <p>
                        <b>
                          <p>Sub-Total</p>
                        </b>
                      </p>
                    </Grid>
                    <Grid
                      item
                      xs={5}
                      style={{ textAlign: "right", color: "#484848" }}
                    >
                      ₹ {total}.00
                    </Grid>
                    <Grid item xs={7}>
                      <p>
                        <b>
                          <p>Delivery</p>
                        </b>
                      </p>
                    </Grid>
                    <Grid
                      item
                      xs={5}
                      style={{ textAlign: "right", color: "#484848" }}
                    >
                      Free Delivery
                    </Grid>
                    <Grid item xs={7}>
                      <p>
                        <b>
                          <p>Total</p>
                        </b>
                      </p>
                    </Grid>
                    <Grid
                      item
                      xs={5}
                      style={{ textAlign: "right", color: "#484848" }}
                    >
                      ₹ {total}.00
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        color="primary"
                        disabled={!checkoutButton}
                        variant="contained"
                        onClick={() => {
                          confirmOrder();
                        }}
                      >
                        Checkout
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Box>
          ) : (
            <div style={{ padding: "1rem" }}>
              <br />
              No products here, continue shopping
              <br /> <br />
              <Link
                to="/all-products"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="primary" variant="contained" fullWidth>
                  Start shopping!
                </Button>
              </Link>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Cart;
