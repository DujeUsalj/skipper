import React, { useEffect, useState } from "react";
import classes from "./Summary.module.css";
import { useStateValue } from "../../../../../StateProvider";
import { db } from "../../../../../firebase";
import firebase from "firebase";
import EditIcon from "@material-ui/icons/Edit";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
function Summary() {
  const [{ currentUser }, dispatch] = useStateValue();
  const [doc, setDoc] = useState();
  const [summaryText, setSummaryText] = useState("");
  const [showEditIcon, setShowEditIcon] = useState(true);
  const [showOutlinedTextArea, setshowOutlinedTextArea] = useState(false);
  let boolean = true;
  const setSummary = () => {
    boolean = !boolean;
    db.collection("Summary").doc(currentUser.email).update({
      Username: currentUser.email,
      Avaiable: "true",
      Summary: summaryText,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setshowOutlinedTextArea(false);
    setShowEditIcon(true);
  };
  const showTextArea = () => {
    setshowOutlinedTextArea(true);
    setShowEditIcon(false);
  };

  useEffect(() => {
    const osRadit = () => {
      console.log("Current user", currentUser?.email);
      if (currentUser?.email) {
        db.collection("Summary")
          .doc(currentUser?.email)
          .onSnapshot((snapshot) => {
            setDoc({ id: snapshot.id, skipper: snapshot.data() });
          });
      }
    };
    osRadit();
  }, [currentUser]);
  useEffect(() => {
    if (doc?.skipper) setSummaryText(doc?.skipper.Summary);
    else if (currentUser?.email) {
      db.collection("Summary")
        .doc(currentUser?.email)
        .set({ Summary: summaryText });
    }
  }, [doc]);
  const TextArea = (theClassname) => {
    if (theClassname === "Fusce")
      return (
        <textarea
          className={classes.Fusce}
          value={summaryText}
          onChange={(event) => setSummaryText(event.target.value)}
          placeholder="Add your summary by clicking EDIT SUMMARY in upper Right Corner"
        ></textarea>
      );
    else
      return (
        <textarea
          className={classes.FusceActive}
          value={summaryText}
          onChange={(event) => setSummaryText(event.target.value)}
        ></textarea>
      );
  };
  return (
    <div className={classes.Div}>
      <div className={classes.DisplayRow}>
        <p className={classes.Summary}>Summary</p>
        <div className={classes.Width} />
        {showEditIcon ? (
          <button className={classes.Button1} onClick={showTextArea}>
            <h1>EDIT SUMMARY</h1>
            <EditIcon className={classes.Oval} />
          </button>
        ) : (
          <button className={classes.Button1} onClick={setSummary}>
            <h1>APPLY CHANGES</h1>
            <DoneOutlineIcon className={classes.Oval} />
          </button>
        )}
      </div>
      <div>
        {!showOutlinedTextArea ? TextArea("Fusce") : TextArea("FusceActive")}
      </div>
    </div>
  );
}

export default Summary;
