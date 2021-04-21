import {
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  Input,
} from "@material-ui/core";

import ImageUpload from "./ImageUpload";
import "./css/UploadProducts.css";

import Alert from "@material-ui/lab/Alert";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStateValue } from "../../StateProvider";
import { Button, Container, TextField } from "@material-ui/core";
import { storage, db } from "../../firebase";
import React, { useState } from "react";
import firebase from "firebase";
import { CheckCircle, Done } from "@material-ui/icons";

function UploadProducts() {
  const [{ user }, dispatch] = useStateValue();

  const [alert, setAlert] = useState({ value: false, msg: "" });

  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("00");
  const [discount, setDiscount] = useState("0");
  const [brand, setBrand] = useState("");

  const [image, setImage] = useState(null);
  const [imageToShow, setImageToShow] = useState(null);

  const [progress, setProgress] = useState(0);
  const [imageSrc, setImageSrc] = useState("");

  //for key value pairs
  const [value, setValue] = useState("");
  const [key, setKey] = useState("");

  const [variants, setVariants] = useState([]);
  const [variantValue, setVariantValue] = useState(false);

  const handleVariants = (e) => {
    e.preventDefault();
    setVariants((history) => {
      return { ...history, [key]: value };
    });
    setVariantValue(true);
    setKey("");
    setValue("");
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageToShow(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUpload = () => {
    if (!image) {
      //   alert("Please choose an image");
      setAlert({ value: true, msg: "Please choose atleast one image" });
    } else {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress logic.
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          //complete function
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              const res = db
                .collection("products")
                .add({
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  description: description,
                  longDescription: longDescription,
                  imageUrl: url,
                  productName: productName,
                  price: productPrice,
                  discount: discount,
                  brand: brand,
                  variants: variants,
                })
                .catch((error) => alert(error.message));
              //post image inside db
              setProgress(0);
              setImage(null);
              setDescription("");
              setLongDescription("");
              setProductName("");
              setProductPrice("");
              setDiscount("");
              setBrand("");
              setVariants([]);
              setVariantValue(false);
              setImageToShow(null);
            });
        }
      );
    }
  };

  const discountPrice = productPrice - (productPrice / 100) * discount;

  return (
    <div id="upload-products">
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            borderRight: "2px solid #f1f1f1",
            overflowY: "auto",
            height: "100vh",
          }}
        >
          <Container>
            {alert.value ? (
              <Alert
                severity="error"
                onClose={() => setAlert({ value: false, msg: "" })}
              >
                {" "}
                {alert.msg}{" "}
              </Alert>
            ) : (
              <></>
            )}
            <progress
              style={{ width: "100%", height: 15, marginTop: "1rem" }}
              value={progress}
              max="100"
            />
            <br />

            <br />

            <Grid container alignItems="center" spacing={1}>
              <p>Mandatory fields</p>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  multiline
                  id="standard-basic"
                  placeholder="Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  multiline
                  id="standard-basic"
                  placeholder="Short Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  required
                  multiline
                  id="standard-basic"
                  placeholder="Long Description"
                  value={longDescription}
                  onChange={(e) => setLongDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  id="standard-basic"
                  placeholder="Enter product price"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  type="number"
                  id="standard-basic"
                  placeholder="discount"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  id="standard-basic"
                  placeholder="Category"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </Grid>
            </Grid>

            <input
              style={{ margin: "2rem 0.5rem" }}
              type="file"
              onChange={handleChange}
            />
            <Divider />
            <br />
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={12}>
                <p>Additional fields</p>
              </Grid>
              <Grid item xs={12}>
                <b>Add variants </b>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  id="standard-basic"
                  placeholder="key :"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  id="standard-basic"
                  placeholder="value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton onClick={handleVariants}>
                  <CheckCircle />
                </IconButton>
              </Grid>
            </Grid>
            <Button
              style={{ marginTop: 20 }}
              onClick={handleUpload}
              variant="contained"
              color="primary"
              disableElevation
            >
              Upload
            </Button>
          </Container>
        </Grid>
        <Grid item xs={12} md={8} style={{ padding: "1rem" }}>
          <h2>Preview </h2>
          <Grid container alignItems="flex-start">
            <Grid item xs={6}>
              <Grid container alignItems="center" justify="flex-start">
                <Grid item xs={8}>
                  <h3>{productName} </h3>
                </Grid>
                <Grid item xs={9}>
                  <p> {description} </p>
                  <p> {brand} </p>
                  <br />
                  <Divider /> <br />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h6" color="primary">
                    Rs&nbsp;{discountPrice.toFixed(2)}{" "}
                    <s style={{ color: "#828387" }}>
                      {" "}
                      <small> {productPrice} </small>{" "}
                    </s>
                    &nbsp;
                    <span style={{ color: "#E78D1B" }}> ({discount}% OFF)</span>
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  {variantValue ? (
                    Object.keys(variants).map((key, i) => (
                      <p>
                        {" "}
                        <b> {key} : </b> {variants[key]}{" "}
                      </p>
                    ))
                  ) : (
                    <></>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <img src={imageToShow} />
            </Grid>
            <Grid item xs={9}>
              <div
                id="prod-desc"
                dangerouslySetInnerHTML={{
                  __html: longDescription,
                }}
              />

              {/* <p> {} </p> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default UploadProducts;
