import { v4 as uuidv4 } from "uuid";
import { SHOW_ALERT, HIDE_ALERT, HIDE_ALL_ALERT } from "./alertTypes";

export const showAlert = (obj) => {
  return { type: SHOW_ALERT, payload: { ...obj, id: uuidv4() } };
};

export const hideAllAlert = () => {
  return { type: HIDE_ALL_ALERT };
};

export const hideAlert = (id) => {
  return {
    type: HIDE_ALERT,
    payload: id,
  };
};
