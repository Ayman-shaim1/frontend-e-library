import styled from "styled-components";

const Flex = styled.div`
  width: 100%;
  display: flex;
  ${(props) =>
    props.justifyContent && "justify-content:" + props.justifyContent + ";"}
  ${(props) => props.alignItems && "align-items:" + props.alignItems + ";"}
`;

export default Flex;
