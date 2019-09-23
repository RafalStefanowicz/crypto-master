import { ACTION_TYPES, ActionType } from "../../types/ACTION_TYPES";

export interface UserNamesI {
  [userName: string]: string;
}
export const userNames = (state: UserNamesI = {}, action: ActionType) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_USER_NAMES:
      return action.payload;
    default:
      return state;
  }
};
