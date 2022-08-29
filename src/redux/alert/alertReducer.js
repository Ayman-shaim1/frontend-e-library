import { SHOW_ALERT, HIDE_ALERT, HIDE_ALL_ALERT } from "./alertTypes";

const alertReducer = (state = { alerts: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ALERT:
      return {
        alerts: [...state.alerts, payload],
      };
    case HIDE_ALERT:
      return { alerts: state.alerts.filter((alerts) => alerts.id !== payload) };
    case HIDE_ALL_ALERT:
      return { alerts: [] };
    default:
      return state;
  }
};

export default alertReducer;
