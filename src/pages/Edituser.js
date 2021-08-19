import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  getSingleUser, updateUser } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Edituser = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");
  let { id } = useParams();
  let {user} = useSelector((state)=> state.data);
  const { name, email, contact, address } = state;
  let history = useHistory();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if(user){
        setState({...user})
    }
  }, [user]);


  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("please fill all the input Fields");
    } else {
      dispatch(updateUser(state,id));
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
          Update
        </Button>
      </form>
    </div>
  );
};

export default Edituser;
