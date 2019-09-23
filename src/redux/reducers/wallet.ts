import { ActionType, ACTION_TYPES } from "../../types/ACTION_TYPES";
import { FetchedCryptosI } from "./cryptos";

export type WalletType =
  | {
      USD: number;
    }
  | FetchedCryptosI
  | null;

export const wallet = (state: WalletType = null, action: ActionType) => {
  switch (action.type) {
    case ACTION_TYPES.SET_WALLET:
      return action.payload;
    default:
      return state;
  }
};
