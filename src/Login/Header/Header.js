import React from "react";
import Logo from "./Logo/Logo";
import classes from "./Header.module.css";
function Header() {
  return (
    <div className={classes.Header}>
      <Logo className={classes.Logo} />
      <div className={classes.Width}></div>
      <button className={classes.Skipper}>SKIPPER</button>
    </div>
  );
}
export default Header;
