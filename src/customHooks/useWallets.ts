import { useState, useEffect } from "react";
import _mapKeys from "lodash/mapKeys";
import _mapValues from "lodash/mapValues";
import { WalletI } from "../redux/reducers/wallet";

import { Firebase } from "../firebase/Firebase";

export interface WalletsI {
  [userName: string]: WalletI;
}

export const useWallets = (firebase: Firebase) => {
  const [wallets, setWallets] = useState<WalletsI>({});

  useEffect(() => {
    firebase.usersDb().on("value", snapshot => {
      const users = snapshot.val();

      // change key for userNames
      const userNames = _mapKeys(users, value => value.personal.userName);

      // keep only wallet property in object
      const wallets = _mapValues(userNames, "wallet");
      setWallets(wallets);
    });

    return () => {
      firebase.usersDb().off();
    };
  }, [firebase]);

  return wallets;
};
