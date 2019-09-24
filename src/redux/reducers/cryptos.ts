import { ACTION_TYPES, ActionType } from "../../types/ACTION_TYPES";
import { CRYPTO_TYPES } from "../../types/CRYPTO_TYPES";

export interface CryptoI {
  CHANGEPCT24HOUR: number;
  FROMSYMBOL: CRYPTO_TYPES;
  IMAGEURL: string;
  PRICE: number;
}

export interface FetchedCryptosI {
  [CRYPTO_TYPES.BTC]: CryptoI;
  [CRYPTO_TYPES.ETH]: CryptoI;
  [CRYPTO_TYPES.XRP]: CryptoI;
  [CRYPTO_TYPES.BCH]: CryptoI;
  [CRYPTO_TYPES.EOS]: CryptoI;
  [CRYPTO_TYPES.BSV]: CryptoI;
  [CRYPTO_TYPES.XLM]: CryptoI;
  [CRYPTO_TYPES.ADA]: CryptoI;
  [CRYPTO_TYPES.TRX]: CryptoI;
  [CRYPTO_TYPES.XMR]: CryptoI;
  [CRYPTO_TYPES.DASG]: CryptoI;
  [CRYPTO_TYPES.MIOTA]: CryptoI;
  [CRYPTO_TYPES.ONT]: CryptoI;
  [CRYPTO_TYPES.ETC]: CryptoI;
  [CRYPTO_TYPES.NEO]: CryptoI;
  [CRYPTO_TYPES.XEM]: CryptoI;
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
