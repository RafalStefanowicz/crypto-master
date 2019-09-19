import {
  ShowModalAction,
  HideModalAction
} from "../redux/actions/modalActions";

import { ISetIsLogInAction } from "../redux/actions/setIsLogIn";

export enum ACTION_TYPES {
  SHOW_MODAL = "showModal",
  HIDE_MODAL = "hideModal",
  SET_LOG_IN = "setLogIn"
}

export type ActionType = ShowModalAction | HideModalAction | ISetIsLogInAction;
