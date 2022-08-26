import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  row-gap: ${(props) => (props.rowGap ? props.rowGap + "px" : "1")};
  column-gap: ${(props) => (props.columnGap ? props.columnGap + "px" : "1")};
  gap: ${(props) => (props.gap ? props.gap + "px" : "1")};
  grid-template-columns: repeat(
    ${(props) => (props.columns ? props.columns : "1")},
    minmax(0, 1fr)
  );
  grid-template-rows: repeat(
    ${(props) => (props.rows ? props.rows : "1")},
    minmax(0, 1fr)
  );
`;

export default Grid;
