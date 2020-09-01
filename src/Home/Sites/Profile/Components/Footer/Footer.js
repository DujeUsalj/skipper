import React, { useEffect, useState } from "react";
import classes from "./Footer.module.css";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { db } from "../../../../../firebase";
import { useStateValue } from "../../../../../StateProvider";
import TextField from "@material-ui/core/TextField";
function Footer() {
  const [{ currentUser }, dispatch] = useStateValue();
  const [doc, setDoc] = useState();
  const [languages, setLanguages] = useState();
  const [sailingArea, setSailingArea] = useState();
  const [interests, setInterests] = useState();
  const [showLanguage, setShowLanguage] = useState(true);
  const [showSailingArea, setShowSailingArea] = useState(true);
  const [showInterests, setShowInterests] = useState(true);
  const [editSkills, setEditSkills] = useState(true);
  const array = ["LANGUAGES", "SAILING AREA", "INTERESTS"];
  const arrayWithItems = [languages, sailingArea, interests];
  const arrayWithShowProperties = [
    showLanguage,
    showSailingArea,
    showInterests,
  ];
  useEffect(() => {
    setTimeout(() => {
      if (doc && currentUser)
        if (doc?.info && currentUser) {
          setLanguages(doc?.info.languages);
          setSailingArea(doc?.info.sailingArea);
          setInterests(doc?.info.interests);
          console.log("Postojim", doc);
        } else {
          setLanguages("Croatian , English , German");
          setSailingArea("North Dalmatia");
          setInterests("Football,Golf,Hiking");
          console.log("Nepostojim");
          console.log("DOOC", doc);
        }
    }, 100);
  }, [doc]);

  useEffect(() => {
    if (currentUser?.email) {
      db.collection("Summary")
        .doc(currentUser?.email)
        .collection("info")
        .doc("skills")
        .onSnapshot((snapshot) => {
          setDoc({ id: snapshot.id, info: snapshot.data() });
        });
    }
  }, [currentUser]);
  useEffect(() => {
    if (languages && sailingArea && interests && currentUser) {
      db.collection("Summary")
        .doc(currentUser.email)
        .collection("info")
        .doc("skills")
        .set({
          languages: languages,
          sailingArea: sailingArea,
          interests: interests,
        });
    }
  }, [languages, sailingArea, interests]);
  const updateSkill = (skill, event) => {
    if (skill === languages) {
      setLanguages(event.target.value);
      console.log(event.target.value);
    }
    if (skill === sailingArea) {
      setSailingArea(event.target.value);
    }
    if (skill === interests) {
      setInterests(event.target.value);
    }
  };
  const displayItems = (boolean) => {
    if (boolean) {
      arrayWithItems.map((skill, index) => {
        return (
          <div className={classes.DisplayRow}>
            <TextField
              id={Math.random(index)}
              label={array[index]}
              onChange={(event) => updateSkill(skill, event)}
            />
            <button
              className={classes.Button}
              onClick={(event) => setEditSkills(!editSkills)}
            >
              <EditOutlinedIcon className={classes.Oval} />
            </button>
          </div>
        );
      });
    } else {
      return (
        <div className={classes.DisplayColumn}>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
        </div>
      );
    }
  };

  return (
    <div className={classes.Div}>
      {editSkills ? (
        arrayWithItems.map((skill, index) => {
          return (
            <div className={classes.DisplayRow}>
              <TextField
                id={Math.random(index)}
                label={array[index]}
                onChange={(event) => updateSkill(skill, event)}
              />
              <button
                className={classes.Button}
                onClick={(event) => setEditSkills(!editSkills)}
              >
                <EditOutlinedIcon className={classes.Oval} />
              </button>
            </div>
          );
        })
      ) : (
        <div className={classes.Div}>
          {array.map((skill) => {
            return <p className={classes.MARINA}>{skill}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default Footer;
