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
  font-size: 16px;
  color: #000;
  font-weight: 500;
  &::-webkit-input-placeholder {
    color: #919aa1;
    font-weight: 400;
    font-size: 16px;
  }

  &:-ms-input-placeholder {
    color: #919aa1;
    font-weight: 400;
    font-size: 16px;
  }

  &::placeholder {
    color: #919aa1;
    font-weight: 400;
    font-size: 16px;
  }
`;
const StyledFormCheckContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledFormCheck = styled.input.attrs({ type: "checkbox" })`
  display: inline-block;
  height: 20px;
  width: 20px;
  background: #fff;
  border: 2px #ddd solid;
  margin-right: 4px;

  &:checked {
    border-color: purple;
    background: purple;
  }
`;
export const FormCheck = ({ label }) => {
  return (
    <StyledFormCheckContainer>
      <StyledFormCheck />
      <FormLabel>{label}</FormLabel>
    </StyledFormCheckContainer>
  );
};

export const FormInputGroupe = styled.div`
  display: flex;
  margin: 7px 0px;
`;

export const FormInputIcon = styled.span`
  background-color: #f1f1f1;
  border: 1px solid #f1f1f1;
  padding: 18px 25px;
`;
