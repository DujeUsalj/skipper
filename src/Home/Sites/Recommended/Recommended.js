import React, { useState } from "react";
import classes from "./Recommended.module.css";
import "date-fns";
import Card from "./Card/Card";
import Header from "./Header/Header";
function Recommended() {
  return (
    <div className={classes.Div}>
      <Header />
      <Card />
    </div>
  );
}

export default Recommended;
