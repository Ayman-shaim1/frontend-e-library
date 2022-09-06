import { SHOW_GLOBAL_LOADING, HIDE_GLOBAL_LOADING } from "./globalLoadingTypes";

export const showGlobalLoading = (obj) => {
  return { type: SHOW_GLOBAL_LOADING };
};

export const hideGlobalLoading = () => {
  return { type: HIDE_GLOBAL_LOADING };
};
