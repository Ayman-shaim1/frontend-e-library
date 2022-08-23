import { v4 as uuidv4 } from "uuid";
import { SHOW_TOAST, HIDE_TOAST } from "./toastTypes";

export const showToast = (obj) => {
  return { type: SHOW_TOAST, payload: { ...obj, id: uuidv4() } };
};

export const hideToast = (id) => {
  return {
    type: HIDE_TOAST,
    payload: id,
  };
};
