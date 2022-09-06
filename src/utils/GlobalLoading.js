import store from "../redux/store";
import { showGlobalLoading, hideGlobalLoading } from "../redux/globalLoading";

class GlobalLoading {
  static show() {
    store.dispatch(showGlobalLoading());
  }

  static hide() {
    store.dispatch(hideGlobalLoading());
  }
}

export default GlobalLoading;
