import styled from "styled-components";

export const GlobalLoadingOverlay = styled.div`
  position: absolute;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  background-color: #fff;
  width: 100%;
  height: calc(100vh - var(--header-height));
  bottom: 0;
  z-index: 100;
`;

export const GlobalLoadingImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: ${(props) => (props.show ? "block" : "none")};
  @media (max-width: 650px) {
    width: 100%;
  }
`;
