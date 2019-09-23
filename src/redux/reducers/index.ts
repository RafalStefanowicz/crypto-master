import { combineReducers } from "redux";

import { modal, IModal } from "./modal";
import { IsLoggedInType, isLoggedIn } from "./isLoggedIn";
import { CryptosI, cryptos } from "./cryptos";
import { userNames, UserNamesI } from "./userNames";
import { wallet, WalletType } from "./wallet";

export interface IStore {
  modal: IModal;
  isLoggedIn: IsLoggedInType;
  cryptos: CryptosI;
  userNames: UserNamesI;
  wallet: WalletType;
}

export const reducers = combineReducers<IStore>({
  modal,
  isLoggedIn,
  cryptos,
  userNames,
  wallet
});
