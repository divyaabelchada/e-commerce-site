import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { db, auth } from "../../firebase";
import { Link, useHistory } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Alert } from "@material-ui/lab";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import { AppName } from "../../App";
import { Avatar } from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        {AppName}
      </Link>{" "}
      {new Date().getFullYear()}
      <br />
      <br /> <br />
      <br />
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function UserSignUp() {
  const classes = useStyles();
  const history = useHistory();
  const [{ user, userData }, dispatch] = useStateValue();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lName, setLName] = useState("");
  const [fName, setFName] = useState("");
  const [contact, setContact] = useState("");

  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ value: false, msg: "" });

  const signUp = (event) => {
    event.preventDefault();
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
        setLoading(false);
        setRegistered(true);
      })
      .catch((error) => {
        setLoading(false);
        setRegistered(false);
        setAlert({ value: true, msg: error.message });
      });
  };

  const createVendor = (e) => {
    e.preventDefault();
    if (registered) {
      dispatch({
        type: actionTypes.SET_USER_DETAILS,
        userData: {
          value: true,
          data: {
            lName: lName,
            fName: fName,
            contact: contact,
            email: email,
            userType: "user",
          },
        },
      });
      history.push("/user-login");
    }
  };

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: "center", margin: "10rem" }}>
          <CircularProgress />
        </div>
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {alert.value ? <Alert severity="error"> {alert.msg} </Alert> : <></>}

          {registered ? (
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <PersonAdd />
              </Avatar>

              <Typography component="h1" variant="h5">
                Just a few steps
              </Typography>

              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      value={fName}
                      onChange={(e) => setFName(e.target.value)}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      value={lName}
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                      onChange={(e) => setLName(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Contact"
                      name="username"
                      autoComplete="username"
                      required
                      fullWidth
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={createVendor}
                >
                  Complete registration
                </Button>

                <Grid container justify="flex-center">
                  <Grid item>
                    <Link to={`/user-login`}>
                      Already have an account? Login
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          ) : (
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <PersonAdd />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      value={email}
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      value={password}
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={signUp}
                >
                  Register
                </Button>

                <Grid container justify="flex-center">
                  <Grid item>
                    <Link to={`/user-login`}>
                      Already have an account? Login
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          )}
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      )}
    </div>
  );
}
