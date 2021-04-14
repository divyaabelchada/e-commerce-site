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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        Naveen Bambhani
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    margin: theme.spacing(1, 0, 1),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const [{ user, adminData }, dispatch] = useStateValue();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lName, setLName] = useState("");
  const [fName, setFName] = useState("");
  const [contact, setContact] = useState("");
  const [aadhar, setAadhar] = useState("");

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
        type: actionTypes.SET_ADMIN_DETAILS,
        adminData: {
          value: true,
          data: {
            username: username,
            lName: lName,
            fName: fName,
            contact: contact,
            aadhar: aadhar,
            userType: "admin",
          },
        },
      });
      history.push("/admin-login");
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
              <Typography component="h1" variant="h5">
                Add your details
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
                      label="Company name"
                      name="username"
                      autoComplete="username"
                      required
                      fullWidth
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="aadhar"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="Aadhar number"
                      value={aadhar}
                      onChange={(e) => setAadhar(e.target.value)}
                      autoFocus
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
                    <Link to={`/`}>Already have an account? Login</Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          ) : (
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Register as vendor
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
                    <Link to={`/`}>Already have an account? Login</Link>
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
