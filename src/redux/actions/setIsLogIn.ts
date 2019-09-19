import { ACTION_TYPES } from "../../types/ACTION_TYPES";

export interface ISetIsLogInAction {
  type: ACTION_TYPES.SET_LOG_IN;
  payload: boolean;
}

export const setIsLogIn = (isLogIn: boolean): ISetIsLogInAction => ({
  type: ACTION_TYPES.SET_LOG_IN,
  payload: isLogIn
});
