import React, { useState, useContext } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import request from "../API/request";
import { UserContext } from "../../UserContext";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Search({ user }) {
  const classes = useStyles();
  const history = useHistory();
  const { setSearchURL } = useContext(UserContext);

  const [search, setSerch] = useState("");

  const handleSearch = (event) => {
    setSerch(event.target.value);
  };

  const movieSearch = request.base + request.fetchSearchMovie + search;
  const handleSendSearch = async (e) => {
    if (search.length > 1) {
      history.replace("/");
    }
    if (e.key === "Enter") {
      if (search.length >= 2) {
        setSearchURL(movieSearch);
        console.clear();
        history.replace("/search");
      }
    }
  };

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          value={search}
          onChange={handleSearch}
          onKeyDown={handleSendSearch}
        />
      </div>

      <Link
        exact
        to="/manage"
        style={{ textDecoration: "none", color: "white", marginLeft: 20 }}
      >
        <Button color="inherit">{user.name}</Button>
      </Link>
    </>
  );
}
//https://api.themoviedb.org/3/search/movie?api_key=896c8566fc255f7c52f6ea6bd2901188&query=
