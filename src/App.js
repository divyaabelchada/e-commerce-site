import { useState } from "react";
import "./App.css";
import {
  NavbarOne,
  NavbarThree,
  NavbarTwo,
} from "./Components/Navbars/Navbars";

//redux
import { useStateValue } from "./StateProvider";
//routing
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";


/* ========== setting up theme =========== */
export const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff0077",
    },
    secondary: {
      main: "#567ff8",
    },
  },
});

function App() {
  const [navbar, setNavbar] = useState(1);

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
            <div>
              default
            </div>
            </Route>
            <Route path="/">
              <div>
                navbar two
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
