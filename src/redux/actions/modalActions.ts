import { IModal } from "../reducers/modal";
import { ACTION_TYPES } from "../../types/ACTION_TYPES";

export interface ShowModalAction {
  type: ACTION_TYPES.SHOW_MODAL;
  payload: IModal;
}

export interface HideModalAction {
  type: ACTION_TYPES.HIDE_MODAL;
}

export const showModal = (modal: IModal): ShowModalAction => ({
  type: ACTION_TYPES.SHOW_MODAL,
  payload: modal
});

export const hideModal = (): HideModalAction => ({
  type: ACTION_TYPES.HIDE_MODAL
});
