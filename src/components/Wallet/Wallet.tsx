import React, { useEffect } from "react";
import { WalletType } from "../../redux/reducers/wallet";

interface WalletProps {
  wallet: WalletType;
}

export const Wallet = (wallet: WalletProps) => {
  return <div>Wallet</div>;
};
