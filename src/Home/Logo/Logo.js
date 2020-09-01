import React from "react";
import classes from "./Logo.module.css";
import image from "./logo.png";
function Logo() {
  return (
    <div className={classes.Logo}>
      <img src={image} />
      <div className={classes.Logo2}>
        <p className={classes.Skipper}>SKIPPER</p>
        <p className={classes.Booking}>Booking</p>
      </div>
    </div>
  );
}

export default Logo;
