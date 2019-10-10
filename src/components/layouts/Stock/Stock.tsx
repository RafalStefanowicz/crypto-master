import React from "react";

import { Wallet } from "../../Wallet/Wallet";
import { TradeLogic } from "../../TradeLogic/TradeLogic";
import { WalletType } from "../../../redux/reducers/wallet";
import { FetchedCryptosI } from "../../../redux/reducers/cryptos";
import { StyledStockWrapper } from "./stockStyles";

export interface StockProps {
  wallet: WalletType;
  cryptos: FetchedCryptosI;
}
export const Stock = ({ wallet, cryptos }: StockProps) => {
  return (
    <StyledStockWrapper>
      <Wallet wallet={wallet} />
      <TradeLogic wallet={wallet} cryptos={cryptos} />
    </StyledStockWrapper>
  );
};
