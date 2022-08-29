import styled, { keyframes } from "styled-components";

const opendialog = keyframes`
 0% {
       transform:  translate(-50%, -50%) scale(0.5); 
    }
 100% {   
     transform:  translate(-50%, -50%) scale(1); 
 }
`;

export const DialogOverlay = styled.div`
  position: fixed;
  /* visibility: hidden; */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

export const DialogContainer = styled.div`
  position: absolute;
  user-select: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  animation-name: ${opendialog};
  animation-duration: var(--main-duration);
`;

export const StyledDialogContent = styled.div`
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: var(--main-border-radius);
  width: 500px;
  z-index: 10000;
  padding: 30px;
`;

export const DialogIconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DialogIconCircle = styled.div`
  font-size: 55px;
  width: 100px;
  height: 100px;
  position: relative;
  border-style: solid;
  border-width: 3px;
  border-radius: 50%;
  margin-bottom: 10px;
  color: ${(props) => props.color && `var(--${props.color}-color)`};
`;

export const DialogIcon = styled.i`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DialogButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  & > button {
    margin: 0 5px;
  }
`;

export const DialogTitle = styled.h2`
  text-align: center;
  margin: 5px 0 -10px 0;
`;

export const DialogParagraph = styled.p`
  padding: 5px;
  text-align: justify;
  font-size: 15px;
`;
