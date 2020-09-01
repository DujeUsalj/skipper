import React, { useState } from "react";
import classes from "../Recommended.module.css";
import Logo from "../../../../Login/Header/Logo/Logo";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
function Header() {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <div className={classes.Recommended}>
        <Logo />
        <div className={classes.Width}></div>
        <button className={classes.Skipper}>SKIPPER</button>
      </div>
      <div className={classes.Recommended2}>
        <p className={classes.RecommendedForYou}>Recommended for you</p>
        <div className={classes.Width1}></div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
}

export default Header;
