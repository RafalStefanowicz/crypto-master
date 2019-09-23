import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { withFirebase } from "./withFirebase";
import { FirebaseOperations } from "./FirebaseOperations";
import { setIsLogIn } from "../redux/actions/setIsLogIn";
import { addUserNames } from "../redux/actions/addUserNames";

interface IFirebaseListener {
  firebase: FirebaseOperations;
  setIsLogIn: typeof setIsLogIn;
  addUserNames: typeof addUserNames;
}

const _FirebaseListener = ({
  firebase,
  setIsLogIn,
  addUserNames
}: IFirebaseListener) => {
  useEffect(() => {
    const listener = firebase.auth.onAuthStateChanged(user => {
      setIsLogIn(!!user);
    });
    return () => {
      listener();
    };
  }, [firebase.auth, setIsLogIn]);

  useEffect(() => {
    firebase.userNamesDb().on("value", snapshot => {
      const users = snapshot.val();
      if (users) {
        addUserNames(users);
      }
    });
    return () => {
      firebase.userNamesDb().off();
    };
  }, [firebase, addUserNames]);

  return <></>;
};

export const FirebaseListeners = compose(
  connect(
    null,
    { setIsLogIn, addUserNames }
  ),
  withFirebase
)(_FirebaseListener) as React.ReactType;
