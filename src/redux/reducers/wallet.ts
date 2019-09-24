import { ActionType, ACTION_TYPES } from "../../types/ACTION_TYPES";
import { CRYPTO_TYPES } from "../../types/CRYPTO_TYPES";

type WalletCryptos = {
  [CRYPTO_TYPES.BTC]?: number;
  [CRYPTO_TYPES.ETH]?: number;
  [CRYPTO_TYPES.XRP]?: number;
  [CRYPTO_TYPES.BCH]?: number;
  [CRYPTO_TYPES.EOS]?: number;
  [CRYPTO_TYPES.BSV]?: number;
  [CRYPTO_TYPES.XLM]?: number;
  [CRYPTO_TYPES.ADA]?: number;
  [CRYPTO_TYPES.TRX]?: number;
  [CRYPTO_TYPES.XMR]?: number;
  [CRYPTO_TYPES.DASG]?: number;
  [CRYPTO_TYPES.MIOTA]?: number;
  [CRYPTO_TYPES.ONT]?: number;
  [CRYPTO_TYPES.ETC]?: number;
  [CRYPTO_TYPES.NEO]?: number;
  [CRYPTO_TYPES.XEM]?: number;
};

interface WalletI extends WalletCryptos {
  USD: number;
}

export type WalletType = WalletI | null;

export const wallet = (state: WalletType = null, action: ActionType) => {
  switch (action.type) {
    case ACTION_TYPES.SET_WALLET:
      return action.payload;
    default:
      return state;
  }
};
