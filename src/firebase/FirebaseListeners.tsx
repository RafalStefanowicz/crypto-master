import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { withFirebase } from "./withFirebase";
import { Firebase } from "./Firebase";
import { setIsLogIn } from "../redux/actions/setIsLogIn";

interface IFirebaseListener {
  firebase: Firebase;
  setIsLogIn: typeof setIsLogIn;
}

const _FirebaseListener = ({ firebase, setIsLogIn }: IFirebaseListener) => {
  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user: any) => {
      console.log(user);
      setIsLogIn(!!user);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <></>;
};

export const FirebaseListeners = compose(
  connect(
    null,
    { setIsLogIn }
  ),
  withFirebase
)(_FirebaseListener) as React.ReactType;
