import React from "react";
import classes from "./NavItems.module.css";

function NavItems({ text }) {
  return <div className={classes.Name}>{text}</div>;
}

export default NavItems;
