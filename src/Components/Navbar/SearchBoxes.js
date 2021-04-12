import React, { useState } from "react";
import "./css/Search.css";
import {
  InputAdornment,
  TextField,
  InputProps,
  IconButton,
  Button,
  Paper,
  Slide,
} from "@material-ui/core";
import { Close, Search, Sort } from "@material-ui/icons";

//for third search box
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

//for fifth search box
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";

export function SearchBoxOne() {
  return (
    <div id="search-one">
      <TextField
        color="secondary"
        placeholder="What are you looking for today?"
        id="search"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {" "}
              <Search />{" "}
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </div>
  );
}

export function SearchBoxTwo() {
  return (
    <div>
      <TextField
        color="secondary"
        placeholder={"What are you looking for today?"}
        id="search"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button color="primary">Search</Button>{" "}
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </div>
  );
}

/* ============ for third search box ================ */
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export function SearchBoxThree() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <Paper component="form" className={classes.root}>
        <Button className={classes.iconButton} aria-label="menu">
          <Sort />
        </Button>
        <InputBase
          className={classes.input}
          placeholder="What are you feeling like today?"
          inputProps={{ "aria-label": "search google maps" }}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        {searchValue != "" ? (
          <Divider className={classes.divider} orientation="vertical" />
        ) : (
          <></>
        )}
        {searchValue != "" ? (
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
          >
            <Close />
          </IconButton>
        ) : (
          <></>
        )}
      </Paper>
    </div>
  );
}

export function SearchBoxFour() {
  const [searchValue, setSearchValue] = useState("");
  const classes = useStyles();
  return (
    <div>
      <Paper component="form" className={classes.root}>
        <Button className={classes.iconButton} aria-label="menu">
          <Sort />
        </Button>
        <InputBase
          className={classes.input}
          placeholder="What are you feeling like today?"
          inputProps={{ "aria-label": "search google maps" }}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        {searchValue != "" ? (
          <Divider className={classes.divider} orientation="vertical" />
        ) : (
          <></>
        )}
        {searchValue != "" ? (
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
          >
            <Close />
          </IconButton>
        ) : (
          <></>
        )}
      </Paper>
    </div>
  );
}

//search box five
