import { useState } from "react";
import "./App.css";
import { NavbarOne, NavbarThree, NavbarTwo } from "./Components/Navbar/Navbars";

//redux
import { useStateValue } from "./StateProvider";
//routing
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { Button, createMuiTheme } from "@material-ui/core";
import Footer from "./Components/Footer/Footer";

/* ========== setting up theme =========== */
export const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff0077",
    },
    secondary: {
      main: "#a2a2a2",
    },
  },
});

export const SearchBox = 1;

function App() {
  const [navbar, setNavbar] = useState(2);

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

          {/* navbar ends here.. */}
          <Switch>
            <Route path="/some-path">
              <div>default</div>
            </Route>
            <Route path="/">
              <div>navbar two</div>

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
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
