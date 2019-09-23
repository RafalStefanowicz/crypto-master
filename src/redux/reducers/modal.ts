import { ACTION_TYPES, ActionType } from "../../types/ACTION_TYPES";
import { MODAL_TYPES } from "../../types/MODAL_TYPES";

const INITIAL_MODAL_STATE = {
  modalType: MODAL_TYPES.INITIAL,
  modalProps: {}
};

export interface IModal {
  modalType: MODAL_TYPES;
  modalProps: {};
}

export const modal = (
  state: IModal = INITIAL_MODAL_STATE,
  action: ActionType
): IModal => {
  switch (action.type) {
    case ACTION_TYPES.SHOW_MODAL:
      return { ...action.payload };
    case ACTION_TYPES.HIDE_MODAL:
      return INITIAL_MODAL_STATE;
    default:
      return state;
  }
};
