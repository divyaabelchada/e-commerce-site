import { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbars";

//firebase
import { db, auth, provider } from "./firebase";
//redux
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
//routing
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import {
  Button,
  Container,
  createMuiTheme,
  Grid,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Footer from "./Components/Footer/Footer";

import AdminLogin from "./Components/AdminLogin/AdminLogin";
import {
  ProductCardone,
  ProductCardThree,
  ProductCardTwo,
} from "./Components/ProductCards/ProductCards";

import optionsWomen from "./assets/optionsWomen.png";
import optionsMen from "./assets/optionsMen.png";
import ImageUpload from "./Components/AdminSection/ImageUpload";
import UserLogin from "./Components/UserSection/UserLogin";
import UserSignUp from "./Components/UserSection/UserSignUp";
import AdminDashboard from "./Pages/AdminDashboard";

//underMaintainence img
import underMaintainence from "./assets/underMaintainence.png";
import { Alert } from "@material-ui/lab";

/* ========== setting up theme =========== */
export const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#011684",
    },
    secondary: {
      main: "#DFE4FF",
    },
  },
  typography: {
    /* subtitle1: {
      fontSize: 12,
    }, */
    body2: {
      // fontWeight: "bold",
    },
    h6: {
      fontWeight: "bold",
    },
    /*  button: {
      fontStyle: "italic",
    }, */
  },
});

export const SearchBox = 3;
export const showDrawer = true;
export const actionType = 3;
export const AppName = "App Studio";

export default function App() {
  /* const [navbar, setNavbar] = useState(2); */
  const [{ user, admin, notifs, config }, dispatch] = useStateValue();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    db.collection("config")
      .doc("NSE6vmextwZbZS8sdBrnnwjLtE52")
      .get()
      .then((doc) => {
        if (doc.exists) {
          //console.log("Document data:", doc.data());
          dispatch({
            type: actionTypes.SET_CONFIG,
            config: doc.data(),
          });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [navbar, setNavbar] = useState(2);

  const addToCart = (quantity) => {
    if (quantity != 0) {
      dispatch({
        type: actionTypes.SET_NOTIFS,
        notifs: {
          value: true,
          error: false,
          msg: quantity + "Product added to cart",
        },
      });
      setTimeout(() => {
        dispatch({
          type: actionTypes.SET_NOTIFS,
          notifs: { value: false, error: false, msg: "Product added to cart" },
        });
      }, 2000);
    }
  };

  //console.log(window.location.href.toString().split(window.location.host)[1]);

  return (
    <ThemeProvider theme={colorTheme}>
      <Router>
        <div className="App">
          <Snackbar
            open={notifs.value}
            autoHideDuration={2000}
            message={notifs.msg}
          />
          <Container maxWidth="xl">
            <Grid container alignItems="center" justify="flex-end" spacing={2}>
              <Grid item>
                <NavLink
                  to={!admin ? "/admin-login" : "/admin-dashboard"}
                  className="links"
                  activeClassName="header-links"
                >
                  {" "}
                  <small>{!admin ? "Admin Login" : "Admin Dashboard"}</small>
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink
                  to="/contact-us"
                  className="links"
                  activeClassName="header-links"
                >
                  <small>Contact us</small>
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink
                  to="/about-us"
                  className="links"
                  activeClassName="header-links"
                >
                  <small>About us</small>
                </NavLink>
              </Grid>
            </Grid>
          </Container>
          {/* navbar ends here.. */}

          {loading ? (
            <div style={{ margin: "20rem", textAlign: "center" }}>
              <CircularProgress />
            </div>
          ) : (
            <div>
              <Switch>
                <Route path="/some-path">
                  <div>default</div>
                </Route>
                <Route path="/user-signup">
                  <Navbar
                    actionType={!config ? "1" : config.actionType}
                    options={
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
                    }
                    showDrawer={!config ? false : config.showDrawer}
                    config={{
                      appName: !config ? "App Studio" : config.appName,
                      email: !config ? "" : config.email,
                      contact: !config ? "" : config.contact,
                    }}
                    searchBox={!config ? "2" : config.searchBox}
                  />
                  <UserSignUp />
                </Route>
                <Route path="/user-login">
                  <Navbar
                    actionType={!config ? "1" : config.actionType}
                    options={
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
                    }
                    showDrawer={!config ? false : config.showDrawer}
                    config={{
                      appName: !config ? "App Studio" : config.appName,
                      email: !config ? "" : config.email,
                      contact: !config ? "" : config.contact,
                    }}
                    searchBox={!config ? "2" : config.searchBox}
                  />
                  <UserLogin />
                </Route>
                <Route path="/user-profile">
                  <Navbar
                    actionType={!config ? "1" : config.actionType}
                    options={
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
                    }
                    showDrawer={!config ? false : config.showDrawer}
                    config={{
                      appName: !config ? "App Studio" : config.appName,
                      email: !config ? "" : config.email,
                      contact: !config ? "" : config.contact,
                    }}
                    searchBox={!config ? "2" : config.searchBox}
                  />
                  {!user ? <div>login</div> : <div> user dashboard</div>}
                </Route>
                <Route path="/admin-dashboard">
                  {!admin ? <div>login</div> : <AdminDashboard />}
                </Route>
                <Route path="/admin-login">
                  <AdminLogin />
                </Route>
                <Route path="/">
                  {loading ? (
                    <div style={{ margin: "10rem", textAlign: "center" }}>
                      <CircularProgress />
                    </div>
                  ) : !config ? (
                    <div
                      id="admin-prompt"
                      style={{
                        backgroundColor: "#f5f8f7",
                        textAlign: "center",
                      }}
                    >
                      <Alert severity="info">
                        If you are admin, login to continue
                        <Link
                          to="/admin-login"
                          className="links"
                          style={{ marginLeft: "3rem" }}
                        >
                          <Button color="primary" variant="outlined">
                            Login
                          </Button>
                        </Link>
                      </Alert>
                      <Container
                        maxWidth="md"
                        style={{ marginTop: "2rem", padding: "5rem" }}
                      >
                        <img
                          style={{
                            width: "100%",
                            objectFit: "contain",
                            maxHeight: "25rem",
                          }}
                          src={underMaintainence}
                        />
                      </Container>
                    </div>
                  ) : (
                    <div>
                      <Navbar
                        actionType={!config ? "1" : config.actionType}
                        options={
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
                        }
                        showDrawer={!config ? false : config.showDrawer}
                        config={{
                          appName: !config ? "App Studio" : config.appName,
                          email: !config ? "" : config.email,
                          contact: !config ? "" : config.contact,
                        }}
                        searchBox={!config ? "2" : config.searchBox}
                      />
                      Home
                    </div>
                  )}
                </Route>
              </Switch>
            </div>
          )}
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
