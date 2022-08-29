import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ToastContainer,
  ToastContent as StyledToastContent,
  ToastInfoWrapper,
  ToastInfoIcon,
} from "./Toast.Elements";

import { Toast as UToast } from "../../utils";

const types = [
  {
    type: "main",
    color: "main",
    icon: <ToastInfoIcon className="fa-solid fa-circle-check"></ToastInfoIcon>,
  },
  {
    type: "danger",
    color: "red",
    icon: <ToastInfoIcon className="fa-solid fa-circle-xmark"></ToastInfoIcon>,
  },
  {
    type: "warning",
    color: "yellow",
    icon: (
      <ToastInfoIcon className="fa-solid fa-circle-exclamation"></ToastInfoIcon>
    ),
  },
  {
    type: "success",
    color: "green",
    icon: <ToastInfoIcon className="fa-solid fa-circle-check"></ToastInfoIcon>,
  },
];

const ToastContent = ({ toast }) => {
  useEffect(() => {
    setTimeout(() => UToast.hide(toast.id), 5000);
  });

  return (
    <StyledToastContent
      color={toast.type && types.find((ty) => ty.type === toast.type).color}
    >
      <ToastInfoWrapper>
        {toast.type && types.find((ty) => ty.type === toast.type).icon}
        <span>{toast.text}</span>
      </ToastInfoWrapper>
      <i
        className="fas fa-times cursor-pointer"
        onClick={() => UToast.hide(toast.id)}
      ></i>
    </StyledToastContent>
  );
};

const Toast = () => {
  // redux states :
  const toast = useSelector((state) => state.toast);
  const { toasts } = toast;

  const hideToastHandler = (id) => {
    UToast.hide(id);
  };

  return (
    <ToastContainer>
      {toasts.length > 0 &&
        toasts
          .slice(-2)
          .map((toast) => (
            <ToastContent
              key={toast.id}
              toast={toast}
              hideToast={hideToastHandler}
            />
          ))}
    </ToastContainer>
  );
};

export default Toast;
