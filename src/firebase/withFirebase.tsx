import React from "react";
import { Subtract } from "utility-types";

import { Firebase } from "./Firebase";
import { FirebaseContext } from "./FirebaseContext";

export interface WithFirebaseProps {
  firebase: Firebase;
}

export const withFirebase = <P extends WithFirebaseProps>(
  Component: React.FC<P>
) => (props: Subtract<P, WithFirebaseProps>) => {
  return (
    <FirebaseContext.Consumer>
      {firebase => <Component {...(props as P)} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );
};
