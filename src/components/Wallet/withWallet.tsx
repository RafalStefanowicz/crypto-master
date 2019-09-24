import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { withFirebase } from "../../firebase/withFirebase";
import { Firebase } from "../../firebase/Firebase";
import { setWallet } from "../../redux/actions/setWallet";
import { WalletType } from "../../redux/reducers/wallet";
import { IStore } from "../../redux/reducers";

interface withWalletProps {
  wallet: WalletType;
}
interface WithWallet {
  setWallet: typeof setWallet;
  firebase: Firebase;
}

export const withWallet = <P extends withWalletProps>(
  Component: React.ComponentType<P>
) => {
  const WithWallet = ({
    wallet,
    setWallet,
    firebase,
    ...otherProps
  }: P & WithWallet) => {
    useEffect(() => {
      const userId = firebase.getUserId();
      if (userId) {
        firebase
          .walletDb(userId)
          .on("value", (snapshot: firebase.database.DataSnapshot) => {
            wallet = snapshot.val();
            if (wallet) {
              setWallet(wallet);
            }
          });
        return () => {
          firebase.walletDb(userId).off();
        };
      }
    }, [firebase, setWallet]);

    return <Component wallet={wallet} {...(otherProps as any)} />;
  };

  const mapStateToProps = (state: IStore) => ({
    wallet: state.wallet
  });

  return compose(
    connect(
      mapStateToProps,
      { setWallet }
    ),
    withFirebase
  )(WithWallet) as React.ComponentType;
};
