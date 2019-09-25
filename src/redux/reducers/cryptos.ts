import { ACTION_TYPES, ActionType } from "../../types/ACTION_TYPES";

export interface CryptoI {
  CHANGEPCT24HOUR: number;
  FROMSYMBOL: string;
  PRICE: number;
}

export interface FetchedCryptosI {
  [crypto: string]: CryptoI;
}

export type CryptosI = FetchedCryptosI | null;

export const cryptos = (state: CryptosI = null, action: ActionType) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_CRYPTOS:
      return action.payload;
    default:
      return state;
  }
};
