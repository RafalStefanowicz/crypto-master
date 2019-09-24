import React from "react";

import { Wallet } from "../../Wallet/Wallet";
import { TradeLogic } from "../../TradeLogic/TradeLogic";
import { WalletType } from "../../../redux/reducers/wallet";

export interface StockProps {
  wallet: WalletType;
}
export const Stock = ({ wallet }: StockProps) => {
  return (
    <div>
      <Wallet wallet={wallet} />
      <TradeLogic wallet={wallet} />
    </div>
  );
};
