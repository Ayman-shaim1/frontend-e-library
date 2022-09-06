import { HIDE_GLOBAL_LOADING, SHOW_GLOBAL_LOADING } from "./globalLoadingTypes";

const globalLoadingReducer = (state = { show: false }, action) => {
  const { type } = action;
  switch (type) {
    case SHOW_GLOBAL_LOADING:
      return { show: true };
    case HIDE_GLOBAL_LOADING:
      return { show: false };
    default:
      return state;
  }
};

export default globalLoadingReducer;
    