import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
  }
`;
export default Row;
