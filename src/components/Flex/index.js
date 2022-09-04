import styled from "styled-components";

const Flex = styled.div`
  width: 100%;
  display: flex;
  ${props =>
    props.flexDirection && "flex-direction:" + props.flexDirection + ";"};
  ${props =>
    props.justifyContent && "justify-content:" + props.justifyContent + ";"};
  ${props => props.alignItems && "align-items:" + props.alignItems + ";"};

  @media (max-width: 500px) {
    ${props =>
      props.smFlexDirection && "flex-direction:" + props.smFlexDirection + ";"}
  }

  @media (max-width: 768px) {
    ${props =>
      props.mdFlexDirection && "flex-direction:" + props.mdFlexDirection + ";"}
  }
`;

export default Flex;
