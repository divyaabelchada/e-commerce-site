import {
  Button,
  Card,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import NavbarActions from "../Navbar/NavbarComponents/NavbarActions";
import { Navbar } from "../Navbar/Navbars";

//redux
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

//firebase
import { storage, db } from "../../firebase";
import firebase from "firebase";
import CustomProductCard from "../ProductCards/CustomProductCard";
import CustomProductCardTwo from "../ProductCards/CustomProductCardTwo";

function Settings() {
  const [{ user, adminData, admin, config }, dispatch] = useStateValue();

  const [appName, setAppName] = useState(!config ? "" : config.appName);
  const [email, setEmail] = useState(!config ? "" : config.email);
  const [contact, setContact] = useState(!config ? "" : config.contact);
  const [companyDetails, setCompanyDetails] = useState(
    !config ? "" : config.companyDetails
  );

  //navbar actions
  const [navbarActions, setNavbarActions] = useState(
    !config
      ? {
          location: false,
          cart: true,
          profile: true,
          wishlist: false,
          language: false,
          notifications: false,
          products: false,
        }
      : config.options
  );
  const [actionType, setActionType] = useState(
    !config ? "1" : config.actionType
  );

  const [searchBox, setSearchBox] = useState(!config ? "1" : config.searchBox);
  const [showDrawer, setShowDrawer] = useState(
    !config ? false : config.showDrawer
  );

  const handleChange = (event) => {
    setNavbarActions({
      ...navbarActions,
      [event.target.name]: event.target.checked,
    });
  };

  //product card
  //card
  const [productCard, setProductCard] = useState(
    !config ? "cardOne" : config.card
  );
  //variant
  const [variant, setVariant] = useState(!config ? "outlined" : config.variant);
  //styling
  const [style, setStyle] = useState(
    !config
      ? {
          borderRadius: `${5}`,
          color: `${"#000000"}`,
        }
      : config.style
  );

  //color

  const [primary, setPrimary] = useState(!config ? "#000" : config.primary);
  const [secondary, setSecondary] = useState(
    !config ? "#fafafa" : config.secondary
  );

  console.log(navbarActions);
  console.log(actionType);

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const saveConfig = () => {
    if (appName != "") {
      setLoading(true);
      db.collection("config")
        .doc(admin.uid)
        .set({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          primary: primary,
          secondary: secondary,
          appName: appName,
          email: email,
          contact: contact,
          searchBox: searchBox,
          showDrawer: showDrawer,
          actionType: actionType,
          options: navbarActions,
          variant: variant,
          style: style,
          card: productCard,
        })
        .catch((error) => alert(error.message));
      dispatch({
        type: actionTypes.SET_CONFIG,
        config: {
          primary: primary,
          secondary: secondary,
          appName: appName,
          email: email,
          contact: contact,
          searchBox: searchBox,
          showDrawer: showDrawer,
          actionType: actionType,
          options: navbarActions,
          variant: variant,
          style: style,
          card: productCard,
        },
      });
      setSuccess(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      alert("please select all mandatory fields");
    }
  };

  return (
    <div>
      {loading ? (
        <Card
          style={{ textAlign: "center", margin: "5rem", minHeight: "70vh" }}
        >
          <CircularProgress />
        </Card>
      ) : (
        <Grid container style={{ padding: "2rem" }} spacing={2}>
          <Grid item xs={12}>
            {/* <NavbarActions actionType={actionType} options={navbarActions} /> */}
            <Navbar
              actionType={actionType}
              options={navbarActions}
              showDrawer={showDrawer}
              config={{
                appName: appName,
                email: email,
                contact: contact,
              }}
              searchBox={searchBox}
            />
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ padding: "2rem", paddingTop: "0.8rem" }}>
              <h3>Enter App details</h3>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="App Name"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    variant="outlined"
                    placeholder="Company Details"
                    value={companyDetails}
                    onChange={(e) => setCompanyDetails(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    variant="outlined"
                    placeholder="Registration Number"
                  />
                </Grid>
              </Grid>
            </Paper>
            <br />
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ padding: "2rem" }}>
              <h3>Build your navbar</h3>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  Choose navbar type :
                  <div>
                    <Radio
                      color="primary"
                      checked={actionType === "1"}
                      onChange={(e) => setActionType(e.target.value)}
                      value="1"
                    />
                    <Radio
                      color="primary"
                      checked={actionType === "2"}
                      onChange={(e) => setActionType(e.target.value)}
                      value="2"
                    />
                    <Radio
                      color="primary"
                      checked={actionType === "3"}
                      onChange={(e) => setActionType(e.target.value)}
                      value="3"
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  Choose search box :
                  <div>
                    <Radio
                      color="primary"
                      checked={searchBox === "1"}
                      onChange={(e) => setSearchBox(e.target.value)}
                      value="1"
                    />
                    <Radio
                      color="primary"
                      checked={searchBox === "2"}
                      onChange={(e) => setSearchBox(e.target.value)}
                      value="2"
                    />
                    <Radio
                      color="primary"
                      checked={searchBox === "3"}
                      onChange={(e) => setSearchBox(e.target.value)}
                      value="3"
                    />
                    <Radio
                      color="primary"
                      checked={searchBox === "4"}
                      onChange={(e) => setSearchBox(e.target.value)}
                      value="4"
                    />
                  </div>
                </Grid>
              </Grid>
              <br />
              <Divider />
              <br />
              Choose options to show :
              <br />
              <Grid container>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={navbarActions.location}
                        onChange={handleChange}
                        name="location"
                      />
                    }
                    label="Location"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={navbarActions.wishlist}
                        onChange={handleChange}
                        name="wishlist"
                      />
                    }
                    label="Wishlist"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={navbarActions.products}
                        onChange={handleChange}
                        name="products"
                      />
                    }
                    label="Products"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={navbarActions.notifications}
                        onChange={handleChange}
                        name="notifications"
                      />
                    }
                    label="Notifications"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={navbarActions.cart}
                        onChange={handleChange}
                        name="cart"
                      />
                    }
                    label="Cart"
                  />
                </Grid>

                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={navbarActions.profile}
                        onChange={handleChange}
                        name="profile"
                      />
                    }
                    label="Profile"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={navbarActions.language}
                        onChange={handleChange}
                        name="language"
                      />
                    }
                    label="Language"
                  />
                </Grid>
              </Grid>
              <br />
              <Divider />
              <br />
              Show Drawer:
              <Checkbox
                color="primary"
                checked={showDrawer}
                onChange={(e) => setShowDrawer(!showDrawer)}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper style={{ padding: "1.5rem", paddingTop: "0.8rem" }}>
              <h3> Product Card Preview </h3>
              <Grid container alignItems="center" spacing={2}>
                <Grid
                  item
                  xs={6}
                  style={
                    productCard === "cardOne"
                      ? { border: "2px solid #000" }
                      : {}
                  }
                  onClick={() => setProductCard("cardOne")}
                >
                  <CustomProductCard
                    productName="Girls Pink Striped Tasselled Backpack"
                    discount={57}
                    price={760}
                    imageUrl="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/26/32bc12f2-ebb5-4489-831b-d377704aff911614327543431-2.jpg"
                    variant={variant}
                    style={style}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={
                    productCard === "cardTwo"
                      ? { border: "2px solid #000" }
                      : {}
                  }
                  onClick={() => setProductCard("cardTwo")}
                >
                  <CustomProductCardTwo
                    productName="Girls Pink Striped Tasselled Backpack"
                    discount={57}
                    price={760}
                    imageUrl="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/26/32bc12f2-ebb5-4489-831b-d377704aff911614327543431-2.jpg"
                    variant={variant}
                    style={style}
                    wishlist={true}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper style={{ padding: "1.5rem", paddingTop: "0.8rem" }}>
              <h3>Customise product Card</h3>

              <Divider />
              <div style={{ paddingBottom: "0.7rem", paddingTop: "0.8rem" }}>
                <Radio
                  color="primary"
                  checked={productCard === "cardOne"}
                  onChange={(e) => setProductCard(e.target.value)}
                  value="cardOne"
                />
                Fixed quantity
                <Radio
                  color="primary"
                  checked={productCard === "cardTwo"}
                  onChange={(e) => setProductCard(e.target.value)}
                  value="cardTwo"
                />
                Custom quantity
              </div>
              <Divider />
              <p>
                <br />
                <b>Choose button type</b>
                <br />
              </p>
              <div style={{ paddingBottom: "1rem" }}>
                <Radio
                  color="primary"
                  checked={variant === "outlined"}
                  onChange={(e) => setVariant(e.target.value)}
                  value="outlined"
                />{" "}
                Outlined
                <Radio
                  color="primary"
                  checked={variant === "contained"}
                  onChange={(e) => setVariant(e.target.value)}
                  value="contained"
                />
                Filled Button
                <Radio
                  color="primary"
                  checked={variant === "text"}
                  onChange={(e) => setVariant(e.target.value)}
                  value="text"
                />
                No outline
              </div>
              <Divider />
              <p>
                <br />
                <b>Add styling to buttons</b>
              </p>
              <br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={4}>
                  Border Radius:
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    multiline
                    type="number"
                    placeholder="calculated in px"
                    value={style.borderRadius}
                    onChange={(e) =>
                      setStyle((history) => {
                        return {
                          ...history,
                          borderRadius: `${e.target.value}`,
                        };
                      })
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  Font Color:
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    multiline
                    placeholder="Add hex code or rgb values"
                    value={style.color}
                    onChange={(e) =>
                      setStyle((history) => {
                        return { ...history, color: `${e.target.value}` };
                      })
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  Background Color:
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    multiline
                    placeholder="Add hex code or rgb values"
                    value={style.backgroundColor}
                    onChange={(e) =>
                      setStyle((history) => {
                        return {
                          ...history,
                          backgroundColor: `${e.target.value}`,
                        };
                      })
                    }
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* colors */}

          <Grid item xs={6}>
            <Paper style={{ padding: "1.5rem", textAlign: "center" }}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    label="primary color"
                    placeholder="primary color in hex"
                    value={primary}
                    onChange={(e) => {
                      setPrimary(e.target.value);
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={1}>
                  <div
                    style={{
                      height: "2rem",
                      width: "2rem",
                      backgroundColor: `${primary}`,
                    }}
                  ></div>
                </Grid>

                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    label="secondary color"
                    placeholder="secondary color in hex"
                    value={secondary}
                    onChange={(e) => {
                      setSecondary(e.target.value);
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={1}>
                  <div
                    style={{
                      height: "2rem",
                      width: "2rem",
                      backgroundColor: `${secondary}`,
                    }}
                  ></div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* save  button grid ========  donot touch ================ */}
          <Grid item xs={6}>
            <Paper style={{ padding: "1.5rem", textAlign: "center" }}>
              <Container maxWidth="xs">
                {success ? (
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    style={{ maxWidth: "70%" }}
                    onClick={() => saveConfig()}
                  >
                    Update
                  </Button>
                ) : (
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={6}>
                      <Button fullWidth variant="outlined">
                        Cancel
                      </Button>
                    </Grid>

                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        onClick={() => saveConfig()}
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                )}{" "}
              </Container>
            </Paper>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Settings;
