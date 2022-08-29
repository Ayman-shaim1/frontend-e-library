import store from "../redux/store";
import { showDialog, hideDialog, hideAllDialog } from "../redux/dialog";

class Dialog {
  static show({ title, message, onYes, onNo }) {
    store.dispatch(hideAllDialog());
    store.dispatch(
      showDialog({
        title,
        message,
        onYes,
        onNo,
      })
    );
  }

  static hide(id) {
    store.dispatch(hideDialog(id));
  }
}

export default Dialog;
