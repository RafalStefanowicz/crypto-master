import React, { useEffect } from "react";
import { withWallet } from "./withWallet";
import { WalletType } from "../../redux/reducers/wallet";
interface WalletProps {
  wallet: WalletType;
}

const _Wallet = (wallet: WalletProps) => {
  return <div>Wallet</div>;
};

export const Wallet = withWallet(_Wallet);
