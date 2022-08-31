import styled, { keyframes } from "styled-components";

const openmodal = keyframes`
 0% {  top: 0 }
 100% {  top: 50% }
`;

const StyledModalOverlay = styled.div`
  position: fixed;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const StyledModal = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  padding: 18px;
  width: 95%;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: var(--main-border-radius);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  animation-name: ${openmodal};
  animation-duration: var(--main-duration);

  @media (min-width: 400px) {
    width: 95%;
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 992px) {
    width: 500px;
  }
`;

const StyledCloseModalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledCloseModal = styled.span`
  color: gray;
  cursor: pointer;
`;

export const Modal = ({ children, show, closeModal }) => {
  return (
    <>
      <StyledModalOverlay show={show} onClick={closeModal} />
      <StyledModal show={show}>
        <StyledCloseModalContainer>
          <StyledCloseModal onClick={closeModal}>
            <i className="fas fa-times"></i>
          </StyledCloseModal>
        </StyledCloseModalContainer>
        {children}
      </StyledModal>
    </>
  );
};
