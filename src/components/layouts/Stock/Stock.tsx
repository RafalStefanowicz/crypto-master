import React from "react";

import { Wallet } from "../../Wallet/Wallet";
import { TradeContainer } from "../../TradeContainer/TradeContainer";
import { WalletType } from "../../../redux/reducers/wallet";

export interface StockProps {
  wallet: WalletType;
}
export const Stock = ({ wallet }: StockProps) => {
  return (
    <div>
      <Wallet />
      <TradeContainer />
    </div>
  );
};
