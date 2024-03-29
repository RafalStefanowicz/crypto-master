import { ActionType, ACTION_TYPES } from "../../types/ACTION_TYPES";

export interface WalletI {
  [key: string]: number;
}

export type WalletType = WalletI | null;

export const wallet = (
  state: WalletType = null,
  action: ActionType
): WalletType => {
  switch (action.type) {
    case ACTION_TYPES.SET_WALLET:
      return action.payload;
    default:
      return state;
  }
};
