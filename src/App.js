import { useState } from "react";
import "./App.css";
import { NavbarOne, NavbarThree, NavbarTwo } from "./Components/Navbar/Navbars";

//redux
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
//routing
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
import AdminSignUp from "./Components/AdminLogin/AdminSignUp";
import {
  ProductCardone,
  ProductCardThree,
  ProductCardTwo,
} from "./Components/ProductCards/ProductCards";

import optionsWomen from "./assets/optionsWomen.png";
import optionsMen from "./assets/optionsMen.png";
import ImageUpload from "./Components/AdminSection/ImageUpload";

/* ========== setting up theme =========== */
export const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff0077",
    },
    secondary: {
      main: "#f678aa",
    },
    neutral: {
      main: "#03D061",
    },
  },
  typography: {
    /* subtitle1: {
      fontSize: 12,
    }, */
    body1: {
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

export const SearchBox = 1;
export const showDrawer = true;

export const products = [
  { value: 1 },
  { value: 1 },
  { value: 1 },
  { value: 1 },
  { value: 1 },
  { value: 1 },
  { value: 1 },
];

function App() {
  /* const [navbar, setNavbar] = useState(2); */
  const [{ user, notifs }, dispatch] = useStateValue();

  const [navbar, setNavbar] = useState(0);

  return (
    <ThemeProvider theme={colorTheme}>
      <Router>
        <div className="App">
          {navbar === 1 ? (
            <NavbarOne />
          ) : navbar === 2 ? (
            <NavbarTwo />
          ) : navbar === 3 ? (
            <NavbarThree />
          ) : null}

          <h3>Choose the type of Navbar</h3>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setNavbar(1);
            }}
          >
            1
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setNavbar(2);
            }}
          >
            2
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setNavbar(3);
            }}
          >
            3
          </Button>
          {/*   option 1
          <NavbarOne />
          option 2:
          <NavbarTwo />
          option 3
          <NavbarThree /> */}
          <br />
          <br />
          <br />
          <ImageUpload />
          <img
            src={optionsWomen}
            style={{ width: "100%", objectFit: "contain" }}
          />
          {/*       <Utils /> */}
          <Snackbar
            open={notifs.value}
            autoHideDuration={6000}
            message={notifs.msg}
            /*  action={
              <Button color="inherit" size="small">
                Cancel
              </Button>
            } */
          />
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4} md={3}>
                <p> Type 1 </p> <br />
                <ProductCardone
                  imageUrl="https://b.zmtcdn.com/data/pictures/chains/0/19174200/397fc2784d73e5e579a9090d8df5f758_o2_featured_v2.jpg"
                  productName="All size grey t-shirt, color:Black, size:Medium"
                  description="One size fits all"
                  price="500"
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <p> Type 2: </p> <br />
                <ProductCardTwo
                  imageUrl="https://b.zmtcdn.com/data/pictures/chains/0/19174200/397fc2784d73e5e579a9090d8df5f758_o2_featured_v2.jpg"
                  productName="All size grey t-shirt, color:Black, size:Medium"
                  description="One size fits all"
                  price="500"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <p> Type 3: </p> <br />
                <ProductCardThree
                  imageUrl="https://b.zmtcdn.com/data/pictures/chains/0/19174200/397fc2784d73e5e579a9090d8df5f758_o2_featured_v2.jpg"
                  productName="All size grey t-shirt, color:Black, size:Medium"
                  description="One size fits all"
                  price="500"
                  sale="flat 25% off on all orders"
                />
                <br />
                <ProductCardThree
                  imageUrl="https://b.zmtcdn.com/data/pictures/chains/0/19174200/397fc2784d73e5e579a9090d8df5f758_o2_featured_v2.jpg"
                  productName="All size grey t-shirt, color:Black, size:Medium"
                  description="One size fits all"
                  price="500"
                  sale="flat 25% off on all orders"
                />
              </Grid>
            </Grid>
          </Container>
          <div>
            <img
              src={optionsMen}
              style={{ width: "100%", objectFit: "contain" }}
            />
          </div>
          <br />
          <br />
          <br />
          {/* navbar ends here.. */}
          <Switch>
            <Route path="/some-path">
              <div>default</div>
            </Route>
            <Route path="/admin-signup">
              <AdminSignUp />
            </Route>
            <Route path="/admin-login">
              <AdminLogin />
            </Route>
            <Route path="/">
              <div>navbar two</div>
              <Link to="/admin-login">login</Link>

              <Grid container alignItems="center" spacing={1}>
                {products.map((val, key) => (
                  <Grid item xs={6} sm={4} md={3}>
                    <Skeleton variant="rect" width={"100%"} height={250} />
                  </Grid>
                ))}
              </Grid>
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
