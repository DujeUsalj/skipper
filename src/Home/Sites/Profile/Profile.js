import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Home from "../../Home";
import classes from "./Profile.module.css";
import Summary from "./Components/Summary/Summary";
import YourSkills from "./Components/YourSkills/YourSkills";
import Footer from "./Components/Footer/Footer";

function Profile() {
  return (
    <div className={classes.Profile}>
      <Home />
      <div className={classes.Page}>
        <Header />
        <Summary />
        <YourSkills />
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
