import React, { useState, useEffect } from "react";
import classes from "./Availability.module.css";
import Home from "../../Home";
import { db } from "../../../firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import firebase, { auth } from "firebase";
import { useStateValue } from "../../../StateProvider";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { toDate } from "date-fns";

function Availability() {
  const [skippers, setSkippers] = useState([""]);
  const [from, setFrom] = useState(new Date("2014-08-18T21:11:54"));
  const [to, setTo] = useState(new Date("2014-08-18T21:11:54"));
  let [fromParsed, setFromParsed] = useState([]);
  let [toParsed, setToParsed] = useState([]);
  const [region, setRegion] = useState("");
  const [{ currentUser }, dispatch] = useStateValue();

  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );
  const [selectedDateTo, setSelectedDateTo] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setFrom(date);
  };
  const handleDateChangeTo = (date) => {
    setTo(date);
  };
  let boolean = false;
  useEffect(() => {
    boolean = false;
    db.collection("Skippers").onSnapshot((snapshot) => {
      setSkippers(
        snapshot.docs.map((doc) => ({ id: doc.id, skipper: doc.data() }))
      );
    });
    // console.log("Skippers?", skippers);
  }, [boolean]);

  // console.log("Availability skipper --->", skippers);
  // console.log("Skippers.map()", skippers[0]);
  const deleteSelectedAvalability = (SkipperId) => {
    let newSkippers = [...skippers];

    const index = skippers.findIndex((skipper) => skipper.id === SkipperId);
    if (index >= 0) {
      newSkippers.splice(index, 1);
    } else {
      console.warn("Cant remove product no id");
    }
    db.collection("Skippers").doc(SkipperId).delete();
    console.log("Skipper ID", SkipperId);
    setSkippers(newSkippers);
    boolean = true;
  };
  const addAvalability = (event) => {
    // event.preventDefault();
    let dateFrom = new Date(from);
    let dateTo = new Date(to);
    fromParsed = [
      ...fromParsed,
      dateFrom.getMonth() + 1 + "/",
      dateFrom.getDate() + "/",
      dateFrom.getFullYear(),
    ];
    toParsed = [
      ...toParsed,
      dateTo.getMonth() + 1 + "/",
      dateTo.getDate() + "/",
      dateTo.getFullYear(),
    ];
    console.log(" From to parsed", toParsed, fromParsed);
    db.collection("Skippers").add({
      Username: currentUser.email,
      From: fromParsed,
      To: toParsed,
      Region: region,
      Avaiable: "true",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    boolean = true;

    console.log("Skipper[0].skipper.From?.Seconds--->", skippers);
  };
  return (
    <div className={classes.Availability}>
      <Home />
      <div className={classes.Grid}>
        <p className={classes.Let}>Let us know when you can work with us!</p>
        <div className={classes.Row}>
          <div className={classes.Rectangle}>
            <p className={classes.Text}>From</p>
          </div>
          <div className={classes.Rectangle}>
            <p className={classes.Text}>To</p>
          </div>
          <div className={classes.Rectangle}>
            <p className={classes.Text}>Region</p>
          </div>
          <div className={classes.Rectangle}>
            <p className={classes.Text}>Actions</p>
          </div>
        </div>

        {skippers.map(({ skipper, id }) => {
          return (
            <div className={classes.Row}>
              <div className={classes.Rectangle}>
                <p className={classes.Text}>
                  {skipper?.From.map((element) => element)}
                </p>
              </div>
              <div className={classes.Rectangle}>
                <p className={classes.Text}>
                  {skipper?.To.map((element) => element)}
                </p>
              </div>
              <div className={classes.Rectangle}>
                <p className={classes.Text}>{skipper?.Region}</p>
              </div>
              <div className={classes.Rectangle1}>
                <button
                  className={classes.Button}
                  onClick={(event) => deleteSelectedAvalability(id)}
                >
                  <div className={classes.Icon}>
                    <p className={classes.Text1}>Delete</p>
                    <DeleteIcon className={classes.Icon1} />
                  </div>
                </button>
              </div>
            </div>
          );
        })}
        <div className={classes.MarginTop}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.Material}
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
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.Material2}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDateTo}
              onChange={handleDateChangeTo}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>

          <input
            className={classes.Rectangle2}
            format="MM/dd/yyyy"
            placeholder="NEW YORK"
            value={region}
            onChange={(event) => setRegion(event.target.value)}
          />

          <button
            className={classes.AvailabilityButton}
            onClick={(event) => addAvalability(event)}
          >
            <p className={classes.Plus}>+</p>
            <p className={classes.Add}> ADD AVAILABILITY</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Availability;
