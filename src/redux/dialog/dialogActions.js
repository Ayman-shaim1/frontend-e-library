import { v4 as uuidv4 } from "uuid";
import { SHOW_DIALOG, HIDE_DIALOG, HIDE_ALL_DIALOG } from "./dialogTypes";

export const showDialog = (obj) => {
  return { type: SHOW_DIALOG, payload: { ...obj, id: uuidv4() } };
};

export const hideAllDialog = () => {
  return { type: HIDE_ALL_DIALOG };
};

export const hideDialog = (id) => {
  return {
    type: HIDE_DIALOG,
    payload: id,
  };
};
