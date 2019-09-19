import { ActionType, ACTION_TYPES } from "../../types/ACTION_TYPES";

export type IsLoggedInType = boolean;

export const isLoggedIn = (
  state: IsLoggedInType = false,
  action: ActionType
): IsLoggedInType => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOG_IN:
      return action.payload;
    default:
      return state;
  }
};
