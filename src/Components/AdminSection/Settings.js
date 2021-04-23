import {
  Button,
  Card,
  CircularProgress,
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

function Settings() {
  const [{ user, adminData, admin, config }, dispatch] = useStateValue();

  const [appName, setAppName] = useState(!config ? "" : config.appName);
  const [email, setEmail] = useState(!config ? "" : config.email);
  const [contact, setContact] = useState(!config ? "" : config.contact);

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
          appName: appName,
          email: email,
          contact: contact,
          searchBox: searchBox,
          showDrawer: showDrawer,
          actionType: actionType,
          options: navbarActions,
        })
        .catch((error) => alert(error.message));
      dispatch({
        type: actionTypes.SET_CONFIG,
        config: {
          appName: appName,
          email: email,
          contact: contact,
          searchBox: searchBox,
          showDrawer: showDrawer,
          actionType: actionType,
          options: navbarActions,
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
        <Card style={{ textAlign: "center", margin: "5rem" }}>
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
            <Paper style={{ padding: "2rem" }}>
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
              </Grid>
            </Paper>
            <br />
            <Paper style={{ padding: "1.5rem", textAlign: "center" }}>
              {success ? (
                <Button
                  fullWidth
                  color="primary"
                  variant="contained"
                  style={{ maxWidth: "70%" }}
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
              )}
            </Paper>
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
        </Grid>
      )}
    </div>
  );
}

export default Settings;
