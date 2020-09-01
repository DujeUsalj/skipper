import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";
import classes from "./Settings.module.css";
import Home from "../../Home";
import { useStateValue } from "../../../StateProvider";

function Settings() {
  const [{ currentUser }, dispatch] = useStateValue();
  useEffect(() => {
    if (currentUser) {
      console.log("current user is", currentUser);
    }
  }, [currentUser]);
  return (
    <div className={classes.DisplayRow}>
      <Home />
      <div className={classes.Grid}>
        <p className={classes.AccountSettings}>Account Settings</p>
        <div className={classes.Grid1}>
          <TextField
            // placeholder="password"
            className={classes.TextField}
            id="outlined-basic"
            label="Passowrd"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;
