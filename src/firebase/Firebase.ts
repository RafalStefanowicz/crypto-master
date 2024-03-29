import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import { firebaseConfig } from "../keys/keys";

export interface DoSignUpI {
  email: string;
  password: string;
}

export interface DoSignInI {
  email: string;
  password: string;
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

  getUserId = () => {
    if (this.auth.currentUser) {
      return this.auth.currentUser.uid;
    }
  };

  protected doSignUp = ({ email, password }: DoSignUpI) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignIn = ({ email, password }: DoSignInI) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email);

  protected doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  protected doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);

  doChangePassword = (currentPassword: string, newPassword: string) => {
    const user = this.auth.currentUser;

    if (user && user.email) {
      return this.doReauthenticateUser(user, user.email, currentPassword)
        .then(() => user.updatePassword(newPassword))
        .catch(error => Promise.reject(error));
    }
    return user;
  };

  private doReauthenticateUser = (
    user: firebase.User,
    userEmail: string,
    currentPassword: string
  ) => {
    const credential = firebase.auth.EmailAuthProvider.credential(
      userEmail,
      currentPassword
    );
    return user.reauthenticateWithCredential(credential);
  };

  walletDb = (userId: string) => this.db.ref(`users/${userId}/wallet`);

  personalDb = (userId: string) => this.db.ref(`users/${userId}/personal`);

  userNamesDb = () => this.db.ref(`usernames`);

  investmentsDb = (userId: string) =>
    this.db.ref(`users/${userId}/investments`);

  usersDb = () => this.db.ref("users");
}
