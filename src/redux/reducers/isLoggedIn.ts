import { ActionType, ACTION_TYPES } from "../../types/ACTION_TYPES";

export type IsLoggedInType = boolean | null;

export const isLoggedIn = (
  state: IsLoggedInType = null,
  action: ActionType
): IsLoggedInType => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOG_IN:
      return action.payload;
    default:
      return state;
  }
};
