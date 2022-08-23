import styled from "styled-components";

export const ToastContainer = styled.div`
  position: absolute;
  bottom: 0;
  user-select: none;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const ToastContent = styled.div`
  width: 400px;
  padding: 10px 20px;
  border-radius: var(--main-border-radius);
  border: solid 1px var(--${(props) => props.color}-color);
  background-color: var(--${(props) => props.color}-color-hover);
  color: #fff;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 10px;
  transition:var(--main-duration);
  @media (max-width: 468px) {
    width: 300px;
  }
`;

export const ToastInfoIcon = styled.i`
  margin-right: 6px;
`;

export const ToastInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
