import { Firebase } from "./Firebase";
import { UserNamesI } from "../redux/reducers/userNames";
import { getUniqueUserName } from "../utility/getUniqueUserName";
import { createInvestmentsObject } from "../utility/createInvestmentObject";
import { INITIAL_WALLET_USD } from "../constants/INITIAL_WALLET_USD";

export interface AddUserToDbI {
  userId: string;
  userName: string;
  email: string;
  createdBy: string;
}

export interface DoCreateUserI {
  userName: string;
  email: string;
  password: string;
}

export class FirebaseOperations extends Firebase {
  private addUserToDb = ({
    userId,
    userName,
    email,
    createdBy
  }: AddUserToDbI) => {
    this.personalDb(userId).set({
      userName,
      email,
      createdBy
    });

    this.walletDb(userId).set({
      USD: INITIAL_WALLET_USD
    });

    if (typeof userName == "string") {
      this.userNamesDb().update({ [userName]: userId });
    }
  };

  doCreateUser = ({ userName, email, password }: DoCreateUserI) =>
    this.doSignUp({ email, password })
      .then(userCredential => {
        const user = userCredential.user;
        if (user && user.email) {
          this.addUserToDb({
            userId: user.uid,
            userName: userName,
            email: user.email,
            createdBy: "firebase.com"
          });
        }
        return user;
      })
      .catch(error => {
        return Promise.reject(error);
      });

  doCreateUserWithGoogle = (userNames: UserNamesI) =>
    this.createUserWithProvider(this.doSignInWithGoogle, userNames);

  doCreateUserWithFacebook = (userNames: UserNamesI) =>
    this.createUserWithProvider(this.doSignInWithFacebook, userNames);

  private createUserWithProvider = (
    signInWithProvider: () => Promise<firebase.auth.UserCredential>,
    userNames: UserNamesI
  ) =>
    signInWithProvider()
      .then(userCredential => {
        const user = userCredential.user;
        const userInfo = userCredential.additionalUserInfo;
        if (
          user &&
          user.displayName &&
          user.email &&
          userInfo &&
          userInfo.isNewUser
        ) {
          const uniqueName = getUniqueUserName(user.displayName, userNames);
          this.addUserToDb({
            userId: user.uid,
            userName: uniqueName,
            email: user.email,
            createdBy: userInfo.providerId
          });
        }
        return user;
      })
      .catch(error => {
        return Promise.reject(error);
      });

  getInvestments = async (userId: string, cryptoSymbol: string) => {
    let snapShot = null;
    await this.investmentsDb(userId).once("value", snapshot => {
      snapShot = snapshot.val();
    });
    return createInvestmentsObject(snapShot, cryptoSymbol);
  };
}
