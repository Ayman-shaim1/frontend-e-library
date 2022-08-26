import styled from "styled-components";

const Column = styled.div`
  flex: 1 0 0%;
  float: left;
  padding: 10px;
  /* width: ${(props) =>
    props.size === 1
      ? "8.33%"
      : props.size === 2
      ? "16.66%"
      : props.size === 3
      ? "25%"
      : props.size === 4
      ? "33.33%"
      : props.size === 5
      ? "41.66%"
      : props.size === 6
      ? " 50%"
      : props.size === 7
      ? "58.33%"
      : props.size === 8
      ? "66.66%"
      : props.size === 9
      ? "75%"
      : props.size === 10
      ? "83.33%"
      : props.size === 11
      ? "91.66%"
      : "100%"}; */
`;
// Column.defaultProps = {
//   size: 1,
// };
export default Column;
