import store from "../redux/store";
import { showAlert, hideAlert, hideAllAlert } from "../redux/alert";

class Alert {
  static show({ type, title, message }) {
    store.dispatch(hideAllAlert());
    store.dispatch(
      showAlert({
        type,
        title,
        message,
      })
    );
  }

  static hide(id) {
    store.dispatch(hideAlert(id));
  }
}

export default Alert;
