import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import toastReducer from "./toast/toastReducer";
import alertReducer from "./alert/alertReducer";
import dialogReducer from "./dialog/dialogReducer";
import globalLoadingReducer from "./globalLoading/globalLoadingReducer";
const initialState = {};

const reducer = combineReducers({
  toast: toastReducer,
  alert: alertReducer,
  dialog: dialogReducer,
  globalLoading: globalLoadingReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
