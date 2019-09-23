import { UserNamesI } from "../reducers/userNames";
import { ACTION_TYPES } from "../../types/ACTION_TYPES";

export interface AddUSerNamesAction {
  type: ACTION_TYPES.ADD_USER_NAMES;
  payload: UserNamesI;
}

export const addUserNames = (userNames: UserNamesI) => ({
  type: ACTION_TYPES.ADD_USER_NAMES,
  payload: userNames
});
