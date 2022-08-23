import { SHOW_TOAST, HIDE_TOAST } from "./toastTypes";

const toastReducer = (state = { toasts: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_TOAST:
      return {
        toasts: [...state.toasts, payload],
      };
    case HIDE_TOAST:
      return { toasts: state.toasts.filter((toast) => toast.id !== payload) };
    default:
      return state;
  }
};

export default toastReducer;
