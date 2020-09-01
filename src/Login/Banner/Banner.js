import React from "react";
import classes from "./Banner.module.css";

function Banner() {
  return (
    <div className={classes.Banner}>
      <div className={classes.Text}>
        <p className={classes.Booking}>© 2019 Skipper Booking, Inc.</p>
        <div className={classes.Width}></div>
        <p className={classes.Terms}>TERMS OF SERVICE</p>
        <p className={classes.Privacy}>PRIVACY POLICY </p>
      </div>
    </div>
  );
}

export default Banner;
