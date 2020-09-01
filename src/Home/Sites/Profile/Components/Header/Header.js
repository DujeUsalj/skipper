import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import StarFilled from "./StarFilled.png";
import StarEmpty from "./StarEmpty.png";
import { useStateValue } from "../../../../../StateProvider";
import ReactDOM from "react-dom";
import DropzoneComponent from "react-dropzone-component";

import UploadImage from "./Upload.png";
import Nogomet from "./Nogomet.jpg";
import { db } from "../../../../../firebase";
import { Select } from "@material-ui/core";
function Header() {
  const [{ currentUser }, dispatch] = useStateValue();
  const [image, setImage] = useState();
  const [doc, setDoc] = useState();
  const [showDropzone, setShowDropzone] = useState();

  useEffect(() => {
    const osRadit = () => {
      if (currentUser?.email) {
        if (
          db.collection("Summary").doc(currentUser.email).collection("Photos")
        ) {
          db.collection("Summary")
            .doc(currentUser.email)
            .collection("Photos")
            .doc("image")
            .onSnapshot((snapshot) => {
              setDoc({ id: snapshot.id, skipperPhoto: snapshot.data() });
            });
          console.log("Postojim to sto nemogu");
        }
      }
    };
    osRadit();
  }, [currentUser]);
  useEffect(() => {
    if (doc?.skipperPhoto) {
      setImage(doc?.skipperPhoto.image);
      console.log("Tu sam");
      setShowDropzone(false);
    } else if (currentUser?.email) {
      setShowDropzone(true);
      console.log("TAKODER TU SAM ISTO");
      if (image) {
        db.collection("Summary")
          .doc(currentUser.email)
          .collection("Photos")
          .doc("image")
          .set({ image: image });
      }
    }
  }, [doc]);
  useEffect(() => {
    setTimeout(() => {
      if (currentUser?.email && image)
        db.collection("Summary")
          .doc(currentUser.email)
          .collection("Photos")
          .doc("image")
          .set({ image: image });
    }, 100);
    console.log("image", image);
  }, [image]);
  let rating = 5;
  var componentConfig = {
    iconFiletypes: [".jpg", ".png", ".gif"],
    showFiletypeIcon: true,
    postUrl: "/uploadHandler",
  };

  var componentConfig = {
    postUrl: "no-url",
  };
  // var djsConfig = { autoProcessQueue: false };
  var eventHandlers = {
    addedfile: (file) => {
      setTimeout(() => {
        // console.log(file.dataURL);
        setImage(file.dataURL);
        setShowDropzone(false);
      }, 20);
    },
  };
  return (
    <div className={classes.Header}>
      {showDropzone ? (
        <DropzoneComponent
          className={classes.Dropzone}
          config={componentConfig}
          eventHandlers={eventHandlers}
          // djsConfig={djsConfig}
        />
      ) : (
        <img className={classes.HeaderImage} src={image}></img>
      )}

      <p className={classes.Name}>John Appleseed</p>
      <div className={classes.Width} />
      <div className={classes.Rating}>
        {Array(rating)
          .fill()
          .map((_) => (
            <img src={StarFilled} className={classes.RatingSpace} />
          ))}
        {Array(5 - rating)
          .fill()
          .map((_) => (
            <img src={StarEmpty} className={classes.RatingSpace} />
          ))}
      </div>
    </div>
  );
}

export default Header;
