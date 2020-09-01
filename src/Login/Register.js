import React from "react";
import Header from "./Header/Header";
import Form from "./Form/Form";
import classes from "./Login.module.css";
import Banner from "./Banner/Banner";
function Login() {
  return (
    <div className={classes.Login}>
      <Header />
      <div className={classes.Form1}>
        <Form
          text={"Already have an account?"}
          text1={"Sign in here."}
          linkto={"login"}
          method={"register"}
        />
      </div>
      <div className={classes.Banner1}>
        <Banner />
      </div>
    </div>
  );
}

export default Login;
