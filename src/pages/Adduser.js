import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Adduser = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");
  const { name, email, contact, address } = state;
  let history = useHistory();
  let dispatch = useDispatch();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("please fill all the input Fields");
    } else {
      dispatch(addUser(state));
      history.push("/");
      setError("");
    }
  };
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => history.push("/")}
      >
        {" "}
        Go back
      </Button>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <br />
        <TextField
          id="standard-basic"
          label="Name"
          name="name"
          value={name}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          name="email"
          value={email}
          type="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          name="contact"
          value={contact}
          type="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          name="address"
          value={address}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <Button variant="contained" color="primary" type="submit">
          {" "}
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Adduser;
