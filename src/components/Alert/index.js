import React, { useEffect } from "react";
import { Button } from "../index";
import {
  AlertContainer,
  AlertOverlay,
  StyledAlertContent,
  AlertIconCircle,
  AlertIcon,
  AlertIconContainer,
  AlertTitle,
  AlertParagraph,
} from "./Alert.Elements";
import { useSelector } from "react-redux";
import { Alert as UAlert } from "../../utils";

const types = [
  {
    type: "main",
    color: "main",
    icon: <AlertIcon className="fa-solid fa-check"></AlertIcon>,
  },
  {
    type: "danger",
    color: "red",
    icon: <AlertIcon className="fas fa-times"></AlertIcon>,
  },
  {
    type: "warning",
    color: "yellow",
    icon: <AlertIcon className="fa-solid fa-exclamation"></AlertIcon>,
  },
  {
    type: "success",
    color: "green",
    icon: <AlertIcon className="fa-solid fa-check"></AlertIcon>,
  },
];

const AlertContent = ({ alert }) => {
  useEffect(() => {
    setTimeout(() => {
      UAlert.hide(alert.id);
    }, 5000);
  });

  return (
    <StyledAlertContent>
      <AlertIconContainer>
        <AlertIconCircle
          color={types.find((ty) => ty.type === alert.type).color}
        >
          {types.find((ty) => ty.type === alert.type).icon}
        </AlertIconCircle>
      </AlertIconContainer>
      <AlertTitle>{alert.title}</AlertTitle>
      <AlertParagraph>{alert.message}</AlertParagraph>
      <Button
        block
        color={types.find((ty) => ty.type === alert.type).color}
        onClick={() => UAlert.hide(alert.id)}
      >
        ok
      </Button>
    </StyledAlertContent>
  );
};

const Alert = () => {
  // redux states :
  const alert = useSelector((state) => state.alert);
  const { alerts } = alert;
  return (
    <>
      {alerts.length > 0 &&
        alerts.map((alert, index) => (
          <div key={index}>
            <AlertOverlay />
            <AlertContainer>
              <AlertContent alert={alert} />
            </AlertContainer>
          </div>
        ))}
    </>
  );
};

Alert.defaultProps = {
  type: "main",
};
export default Alert;
