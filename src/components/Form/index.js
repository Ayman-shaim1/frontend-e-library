import styled from "styled-components";

export const Form = styled.form`
  padding: 14px;
  width: 100%;
  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 992px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

export const FormLabel = styled.label`
  font-size: 15px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 18px 20px;
  background-color: #f7f7f9;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #55595c;
  font-weight: 400;
  &::-webkit-input-placeholder {
    color: #adb5bd;
    font-size: 16px;
  }

  &:-ms-input-placeholder {
    color: #adb5bd;
    font-size: 16px;
  }

  &::placeholder {
    color: #adb5bd;
    font-size: 16px;
  }
`;

const StyledFormCheckContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledFormCheckLabel = styled(FormLabel)`
  user-select: none;
  position: relative;
  padding-left: 25px;
  padding-top: 1px;

  &::before {
    content: "";
    width: 17px;
    height: 17px;
    border: 1px solid lightgray;
    border-radius: var(--main-border-radius);
    position: absolute;
    left: 0;
    top: 3px;
  }
  &::after {
    font-family: "FontAwesome";
    content: "\f00c";
    position: absolute;
    border-radius: var(--main-border-radius);
    left: 0;
    top: 3px;
    width: 17px;
    height: 17px;
    background-color: var(--main-color);
    color: #fff;
    font-size: 16px;
    text-align: center;
    padding: 1px;
    display: none;
  }
`;

const StyledFormCheck = styled.input.attrs({ type: "checkbox" })`
  --webkit-appearance: none;
  appearance: none;
  width: 17px;
  height: 17px;
  position: absolute;
  z-index: 100;
  cursor: pointer;
  &:checked + label {
    &::after {
      display: block;
    }
  }
`;

export const FormCheck = ({ label, ...otherProps }) => {
  return (
    <StyledFormCheckContainer>
      <StyledFormCheck {...otherProps} />
      <StyledFormCheckLabel>{label}</StyledFormCheckLabel>
    </StyledFormCheckContainer>
  );
};

export const FormInputGroup = styled.div`
  display: flex;
  margin: 7px 0px;
`;

export const FormInputIcon = styled.span`
  background-color: #f1f1f1;
  border: 1px solid #f1f1f1;
  padding: 18px 25px;
  color: gray;
`;

const StyledFromSelectContainer = styled.div`
  position: relative;
  &::after {
    font-family: "FontAwesome";
    content: "\f0d7";
    position: absolute;
    display: inline-block;
    top: 17px;
    right: 18px;
    color: gray;
  }
`;

const StyledFormSelect = styled.select`
  appearance: none;
  --webkit-appearance: none;
  --moz-appearance: none;
  --ms-appearance: none;
  user-select: none;
  width: 100%;
  padding: 18px 25px;
  background-color: #f7f7f9;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #55595c;
  font-weight: 400;
  & > option {
    font-size: 15px;
  }
`;

export const FormSelect = ({ children }) => {
  return (
    <StyledFromSelectContainer>
      <StyledFormSelect>{children}</StyledFormSelect>
    </StyledFromSelectContainer>
  );
};
