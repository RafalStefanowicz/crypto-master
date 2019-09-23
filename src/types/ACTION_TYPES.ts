import {
  ShowModalAction,
  HideModalAction
} from "../redux/actions/modalActions";
import { ISetIsLogInAction } from "../redux/actions/setIsLogIn";
import { FetchCryptosAction } from "../redux/actions/fetchCryptosAction";
import { AddUSerNamesAction } from "../redux/actions/addUserNames";
import { SetWalletAction } from "../redux/actions/setWallet";

export enum ACTION_TYPES {
  SHOW_MODAL = "showModal",
  HIDE_MODAL = "hideModal",
  SET_LOG_IN = "setLogIn",
  FETCH_CRYPTOS = "fetchCryptos",
  ADD_USER_NAMES = "addUserNames",
  SET_WALLET = "setWallet"
}

export type ActionType =
  | ShowModalAction
  | HideModalAction
  | ISetIsLogInAction
  | FetchCryptosAction
  | AddUSerNamesAction
  | SetWalletAction;
