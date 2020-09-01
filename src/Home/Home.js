import React from "react";
import Logo from "./Logo/Logo";
import classes from "./Home.module.css";
import NavItems from "./NavItems/NavItems";
import { Link, Router } from "react-router-dom";
import { Switch } from "@material-ui/core";
function Home() {
  const items = ["DASHBOARD", "PROFILE", "AVAILABILITY", "SETTINGS", "LOGOUT"];
  return (
    <div className={classes.MarginTop}>
      <div className={classes.Sidebar}>
        <div className={classes.Logo1}>
          <Logo />
          <div className={classes.Top}>
            {items.map((item) => {
              return (
                <Link className={classes.MyLink} to={`/${item}`}>
                  <NavItems text={item} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
