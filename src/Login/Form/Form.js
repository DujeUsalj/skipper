import React, { useState } from "react";
import classes from "./Form.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory, Link } from "react-router-dom";
import { auth } from "firebase";

function Form({ text, text1, linkto, loginProp }) {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const login = (event) => {
    event.preventDefault();
    // auth.ActionCodeInfo.Operation.EMAIL_SIGNIN(email, password)
    //   .then((auth) => {
    //     history.push("/");
    //   })
    //   .catch((e) => alert(e.message));
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className={classes.Override}>
      <form className={classes.Form}>
        <p className={classes.WelcomeSkipper}>Welcome Skipper</p>
        <div className={classes.Razmak2}></div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className={classes.Label}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          className={classes.Label}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <div className={classes.Razmak}>
          {loginProp ? (
            <Button
              className={classes.RectangleLogin}
              type="submit"
              variant="contained"
              color="secondary"
              onClick={login}
            >
              Login
            </Button>
          ) : (
            <Button
              className={classes.RectangleLogin}
              type="submit"
              variant="contained"
              color="secondary"
              onClick={register}
            >
              Register
            </Button>
          )}
        </div>
        <div className={classes.Text}>
          <p className={classes.Register}>{text}</p>
          <Link to={linkto}>
            <p className={classes.Here}>{text1}</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Form;
