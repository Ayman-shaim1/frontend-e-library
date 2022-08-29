import React from "react";
import { Button } from "../index";
import {
  DialogContainer,
  DialogOverlay,
  StyledDialogContent,
  DialogIconCircle,
  DialogIcon,
  DialogIconContainer,
  DialogTitle,
  DialogButtonContainer,
  DialogParagraph,
} from "./Dialog.Elements";
import { useSelector } from "react-redux";
import { Dialog as UDialog } from "../../utils";
const DialogContent = ({ dialog }) => {
  const onYesHandler = () => {
    UDialog.hide(dialog.id);
    if (dialog.onYes) {
      dialog.onYes();
    }
  };

  const onNoHandler = () => {
    UDialog.hide(dialog.id);
    if (dialog.onNo) {
      dialog.onNo();
    }
  };

  return (
    <StyledDialogContent>
      <DialogIconContainer>
        <DialogIconCircle>
          <DialogIcon className="fa-solid fa-question"></DialogIcon>
        </DialogIconCircle>
      </DialogIconContainer>
      <DialogTitle>{dialog.title}</DialogTitle>
      <DialogParagraph>{dialog.message}</DialogParagraph>
      <DialogButtonContainer>
        <Button onClick={onYesHandler}>yes</Button>
        <Button color="secondary" onClick={onNoHandler}>
          no
        </Button>
      </DialogButtonContainer>
    </StyledDialogContent>
  );
};

const Dialog = () => {
  // redux states :
  const dialog = useSelector((state) => state.dialog);
  const { dialogs } = dialog;
  return (
    <>
      {dialogs.length > 0 &&
        dialogs.map((dialog, index) => (
          <div key={index}>
            <DialogOverlay />
            <DialogContainer>
              <DialogContent dialog={dialog} />
            </DialogContainer>
          </div>
        ))}
    </>
  );
};

export default Dialog;
