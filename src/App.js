import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import { useStateValue } from "./StateProvider";
import { auth, db } from "./firebase";
import Register from "./Login/Register";
import Home from "./Home/Home";
import Dashboard from "./Home/Sites/Dashboard/Dashboard";
import Availability from "./Home/Sites/Availability/Availability";
import Recommended from "./Home/Sites/Recommended/Recommended";
import Profile from "./Home/Sites/Profile/Profile";
import Settings from "./Home/Sites/Settings/Settings";
function App() {
  const [{ currentUser }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //User is logged in
        dispatch({ type: "SET_USER", currentUser: authUser });
      } else {
        dispatch({ type: "SET_USER", currentUser: null });
      }
    });
    return () => {
      unsubscribe();
      // console.log("USER IS ----->", currentUser);
    };
  }, []);

  return (
    <Router>
      <div className={classes.App}>
        <Switch>
          <Route path="/SETTINGS">
            <Settings />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/DASHBOARD">
            <Dashboard />
          </Route>
          <Route path="/AVAILABILITY">
            <Availability />
          </Route>
          <Route path="/Recommended">
            <Recommended />
          </Route>
          <Route path="/">
            <h1>Hello</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
