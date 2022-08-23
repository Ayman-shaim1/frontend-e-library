import store from "../redux/store";
import { showToast, hideToast } from "../redux/toast/";

class Toast {
  static show({ type, text }) {
    store.dispatch(
      showToast({
        type,
        text,
      })
    );
  }

  static hide() {
    store.dispatch(hideToast());
  }
}

export default Toast;
