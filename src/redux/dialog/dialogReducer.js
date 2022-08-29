import { SHOW_DIALOG, HIDE_DIALOG, HIDE_ALL_DIALOG } from "./dialogTypes";

const dialogReducer = (state = { dialogs: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_DIALOG:
      return {
        dialogs: [...state.dialogs, payload],
      };
    case HIDE_DIALOG:
      return {
        dialogs: state.dialogs.filter((dialog) => dialog.id !== payload),
      };
    case HIDE_ALL_DIALOG:
      return { dialogs: [] };
    default:
      return state;
  }
};

export default dialogReducer;
