import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import { firebaseConfig } from "../keys/keys";

export interface DoSignUpI {
  userName: string;
  email: string;
  password: string;
}

export interface DoSignInI {
  email: string;
  password: string;
}

export interface DoSetUserDataI {
  userId: string | null;
  userName: string | null;
  email: string | null;
}

export class Firebase {
  firebase: firebase.app.App;
  auth: firebase.auth.Auth;
  db: firebase.database.Database;
  googleProvider: firebase.auth.GoogleAuthProvider;
  facebookProvider: firebase.auth.FacebookAuthProvider;

  constructor() {
    this.firebase = firebase.initializeApp(firebaseConfig);
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.facebookProvider = new firebase.auth.FacebookAuthProvider();
    this.auth = this.firebase.auth();
    this.db = this.firebase.database();
  }

  doSignUp = ({ userName, email, password }: DoSignUpI) =>
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        const user = auth.user;
        if (user) {
          this.doSetUserData({
            userId: user.uid,
            userName: userName,
            email: user.email
          });
        }
        return user;
      })
      .catch(error => {
        return Promise.reject(error);
      });

  doSignIn = ({ email, password }: DoSignInI) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email);

  doSetUserData = ({ userId, userName, email }: DoSetUserDataI): void => {
    this.db.ref(`users/${userId}`).set({
      userName,
      email
    });
  };

  doSignInWithGoogle = () => {
    this.auth
      .signInWithPopup(this.googleProvider)
      .then(auth => {
        const user = auth.user;
        const userInfo = auth.additionalUserInfo;
        if (user && userInfo && userInfo.isNewUser) {
          this.doSetUserData({
            userId: user.uid,
            userName: user.displayName,
            email: user.email
          });
        }

        return user;
      })
      .catch(error => {
        alert(error.message);
      });
  };

  doSignInWithFacebook = () => {
    this.auth
      .signInWithPopup(this.facebookProvider)
      .then(auth => {
        const user = auth.user;
        const userInfo = auth.additionalUserInfo;
        if (user && userInfo && userInfo.isNewUser) {
          this.doSetUserData({
            userId: user.uid,
            userName: user.displayName,
            email: user.email
          });
        }
        return user;
      })
      .catch(error => {
        alert(error.message);
      });
  };
}
