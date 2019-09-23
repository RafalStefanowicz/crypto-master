import { ACTION_TYPES } from "../../types/ACTION_TYPES";
import { WalletType } from "../reducers/wallet";

export interface SetWalletAction {
  type: ACTION_TYPES.SET_WALLET;
  payload: WalletType;
}

export const setWallet = (wallet: WalletType): SetWalletAction => ({
  type: ACTION_TYPES.SET_WALLET,
  payload: wallet
});
