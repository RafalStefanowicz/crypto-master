import { combineReducers } from "redux";

import { modal, IModal } from "./modal";
import { IsLoggedInType, isLoggedIn } from "./isLoggedIn";

export interface IStore {
  modal: IModal;
  isLoggedIn: IsLoggedInType;
}

export const reducers = combineReducers<IStore>({
  modal,
  isLoggedIn
});
