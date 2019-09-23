import { ACTION_TYPES, ActionType } from "../../types/ACTION_TYPES";

export interface CryptoI {
  CHANGEPCT24HOUR: number;
  FROMSYMBOL: string;
  IMAGEURL: string;
  PRICE: number;
}

export interface FetchedCryptosI {
  BTC: CryptoI;
  ETH: CryptoI;
  XRP: CryptoI;
  BCH: CryptoI;
  EOS: CryptoI;
  BSV: CryptoI;
  XLM: CryptoI;
  ADA: CryptoI;
  TRX: CryptoI;
  XMR: CryptoI;
  DASG: CryptoI;
  MIOTA: CryptoI;
  ONT: CryptoI;
  ETC: CryptoI;
  NEO: CryptoI;
  XEM: CryptoI;
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
