import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, NavLink, useHistory } from "react-router-dom";
import { db, auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import AdminDashboard from "../../Pages/AdminDashboard";
import { CircularProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { Security } from "@material-ui/icons";

function Copyright() {
  const [{ user, adminData, config }, dispatch] = useStateValue();

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        {!config ? "" : config.appName}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AdminLogin() {
  const classes = useStyles();

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ value: false, msg: "" });

  const [admin, setAdmin] = useState(false);

  const [{ user, adminData, config }, dispatch] = useStateValue();

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        setAlert({ value: false, msg: "" });
        //console.log(result.user.uid);
        db.collection("admin")
          .doc(result.user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              dispatch({
                type: actionTypes.SET_USER,
                user: null,
              });
              dispatch({
                type: actionTypes.SET_ADMIN,
                admin: result.user,
              });
              dispatch({
                type: actionTypes.SET_ADMIN_DASHBOARD,
                adminDetails: doc.data(),
              });
              history.push("/admin-dashboard");
            } else {
              // doc.data() will be undefined in this case
              setAlert({ value: true, msg: "Unauthorised access" });
            }
          })
          .catch((error) => {
            //console.log("Error getting document:", error);
            setAlert({ value: true, msg: "Error getting document" });
          });
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch((error) => setAlert({ value: true, msg: error.message }));
  };

  return (
    <div>
      {loading ? (
        <div
          style={{
            textAlign: "center",
            margin: "10rem",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {alert.value ? (
            <Alert
              severity="error"
              onClose={() => {
                setAlert({ value: false, msg: "" });
              }}
            >
              {" "}
              {alert.msg}{" "}
            </Alert>
          ) : (
            <></>
          )}
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <Security />
            </Avatar>
            <Typography component="h1" variant="h5">
              Admin Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={login}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                {/* <Grid item>
                  <Link to="/admin-signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid> */}
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      )}
    </div>
  );
}
