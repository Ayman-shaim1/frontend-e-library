import store from "../redux/store";
import { showToast, hideToast } from "../redux/toast/";

class Toast {
  static show({ type, message }) {
    store.dispatch(
      showToast({
        type,
        message,
      })
    );
  }

  static hide(id) {
    store.dispatch(hideToast(id));
  }
}

export default Toast;
