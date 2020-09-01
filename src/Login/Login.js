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
          text={"Don’t have an account?"}
          text1={"Register here."}
          linkto={"register"}
          loginProp={true}
        />
      </div>
      <div className={classes.Banner1}>
        <Banner />
      </div>
    </div>
  );
}

export default Login;
