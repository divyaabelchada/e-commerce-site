import { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbars";

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
      fontWeight: "bold",
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
  const [{ user, admin, notifs }, dispatch] = useStateValue();

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

          <Navbar />

          {/* navbar ends here.. */}
          <Switch>
            <Route path="/some-path">
              <div>default</div>
            </Route>
            <Route path="/user-signup">
              <UserSignUp />
            </Route>
            <Route path="/user-login">
              <UserLogin />
            </Route>
            <Route path="/user-profile">
              {!user ? <div>login</div> : <div> user dashboard</div>}
            </Route>
            <Route path="/admin-dashboard">
              {!admin ? <div>login</div> : <AdminDashboard />}
            </Route>
            <Route path="/admin-login">
              <AdminLogin />
            </Route>
            <Route path="/">Home</Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
