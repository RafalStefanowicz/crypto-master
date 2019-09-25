import { ActionType, ACTION_TYPES } from "../../types/ACTION_TYPES";

interface WalletI {
  [key: string]: number;
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
