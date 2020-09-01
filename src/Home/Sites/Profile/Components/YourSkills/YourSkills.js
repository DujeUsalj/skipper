import React, { useEffect, useState } from "react";
import classes from "./YourSkills.module.css";
import AddIcon from "@material-ui/icons/Add";
import { db } from "../../../../../firebase";
import { useStateValue } from "../../../../../StateProvider";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import TextField from "@material-ui/core/TextField";
function YourSkills() {
  const [{ currentUser }, dispatch] = useStateValue();
  const [doc, setDoc] = useState();
  const [objectKeys, setObjectKeys] = useState([
    "Cooking",
    "Diving",
    "Fishing",
    "Video",
  ]);
  const [objectValues, setObjectValues] = useState([5, 5, 5, 5]);
  const [showAddIcon, setShowAddIcon] = useState(true);
  const [showDoneIcon, setShowDoneIcon] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const [newRating, setNewRating] = useState("");
  useEffect(() => {
    const osRadit = () => {
      if (currentUser?.email) {
        if (
          db.collection("Summary").doc(currentUser.email).collection("Skills")
        ) {
          db.collection("Summary")
            .doc(currentUser.email)
            .collection("Skills")
            .doc("ingridients")
            .onSnapshot((snapshot) => {
              setDoc({ id: snapshot.id, ingridients: snapshot.data() });
            });
        } else {
          db.collection("Summary")
            .doc(currentUser.email)
            .collection("Skills")
            .doc("ingridients")

            .set(objectKeys, objectValues);
        }
      }
    };
    osRadit();
  }, [currentUser]);
  useEffect(() => {
    if (doc?.ingridients) {
      setObjectKeys(doc?.ingridients.objectKeys);
      setObjectValues(doc?.ingridients.objectValues);
    }
  }, [doc]);
  const deleteSelectedSkill = (indexOfSelectedElement) => {
    objectKeys.splice(indexOfSelectedElement, 1);
    objectValues.splice(indexOfSelectedElement, 1);

    db.collection("Summary")
      .doc(currentUser.email)
      .collection("Skills")
      .doc("ingridients")
      .set({
        objectKeys,
        objectValues,
      });
  };

  const addSkillToYourSkills = (skill, rating) => {
    if (skill && rating) {
      objectKeys.push(skill);
      objectValues.push(rating);
      db.collection("Summary")
        .doc(currentUser.email)
        .collection("Skills")
        .doc("ingridients")
        .set({
          objectKeys,
          objectValues,
        });
      setNewRating("");
      setNewSkill("");
    }
    setShowAddIcon(true);
  };

  return (
    <div className={classes.Div}>
      {showAddIcon ? (
        <div className={classes.DisplayRow}>
          <p className={classes.YourSkills}>Your Skills</p>
          <div className={classes.Width} />
          <button
            className={classes.Button}
            onClick={(event) => setShowAddIcon(false)}
          >
            <AddIcon />
          </button>
        </div>
      ) : (
        <div className={classes.DisplayRow}>
          <p className={classes.YourSkills}>Your Skills</p>
          <div className={classes.Width} />
          <TextField
            className={classes.TextField1}
            id="outlined-basic"
            label="Skill (Diving ,Cooking...)"
            variant="outlined"
            value={newSkill}
            onChange={(event) => setNewSkill(event.target.value)}
          />
          <TextField
            className={classes.TextField1}
            id="outlined-basic"
            label="Rating (1,2,3,4,5)"
            variant="outlined"
            value={newRating}
            onChange={(event) => setNewRating(event.target.value)}
          />
          <button
            className={classes.Button1}
            onClick={(event) => addSkillToYourSkills(newSkill, newRating)}
          >
            <DoneOutlineIcon />
          </button>
        </div>
      )}

      <div>
        {objectKeys?.map((element, index) => {
          return (
            <div className={classes.DisplayRow}>
              <div className={classes.DisplayColumn}>
                <div className={classes.Row}>
                  <p>{element} </p>
                  <div className={classes.Width}></div>
                  <p className={classes.Number}>{objectValues?.[index]} </p>
                </div>
                <div className={classes.Line}></div>
              </div>
              <div className={classes.Icon}>
                <div className={classes.DisplayColumn}>
                  <div className={classes.Height}></div>
                  <button
                    className={classes.Button1}
                    onClick={(event) => deleteSelectedSkill(index)}
                  >
                    <HighlightOffRoundedIcon className={classes.Icon1} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <p className={classes.By}>
          By your skills your will be recommended to our clients! Here goes some
          further explanation why is it benefitial for every skipper to add
          their skills, which is Borna going to provide until the project
          launches.
        </p>
      </div>
    </div>
  );
}
export default YourSkills;
