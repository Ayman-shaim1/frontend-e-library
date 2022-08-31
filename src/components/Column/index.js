import styled from "styled-components";

const Column = styled.div`
  float: left;
  width: 33.33%;
  padding: 5px 15px;
  @media (min-width: 120px) {
    width: 100%;
  }

  @media (min-width: 320px) {
    width: ${(props) =>
      props.xs === 1
        ? "8.33%"
        : props.xs === 2
        ? "16.66%"
        : props.xs === 3
        ? "25%"
        : props.xs === 4
        ? "33.33%"
        : props.xs === 5
        ? "41.66%"
        : props.xs === 6
        ? " 50%"
        : props.xs === 7
        ? "58.33%"
        : props.xs === 8
        ? "66.66%"
        : props.xs === 9
        ? "75%"
        : props.xs === 10
        ? "83.33%"
        : props.xs === 11
        ? "91.66%"
        : "100%"};
  }

  @media (min-width: 500px) {
    width: ${(props) =>
      props.sm === 1
        ? "8.33%"
        : props.sm === 2
        ? "16.66%"
        : props.sm === 3
        ? "25%"
        : props.sm === 4
        ? "33.33%"
        : props.sm === 5
        ? "41.66%"
        : props.sm === 6
        ? " 50%"
        : props.sm === 7
        ? "58.33%"
        : props.sm === 8
        ? "66.66%"
        : props.sm === 9
        ? "75%"
        : props.sm === 10
        ? "83.33%"
        : props.sm === 11
        ? "91.66%"
        : "100%"};
  }

  @media (min-width: 768px) {
    width: ${(props) =>
      props.md === 1
        ? "8.33%"
        : props.md === 2
        ? "16.66%"
        : props.md === 3
        ? "25%"
        : props.md === 4
        ? "33.33%"
        : props.md === 5
        ? "41.66%"
        : props.md === 6
        ? " 50%"
        : props.md === 7
        ? "58.33%"
        : props.md === 8
        ? "66.66%"
        : props.md === 9
        ? "75%"
        : props.md === 10
        ? "83.33%"
        : props.md === 11
        ? "91.66%"
        : "100%"};
  }

  @media (min-width: 992px) {
    width: ${(props) =>
      props.lg === 1
        ? "8.33%"
        : props.lg === 2
        ? "16.66%"
        : props.lg === 3
        ? "25%"
        : props.lg === 4
        ? "33.33%"
        : props.lg === 5
        ? "41.66%"
        : props.lg === 6
        ? " 50%"
        : props.lg === 7
        ? "58.33%"
        : props.lg === 8
        ? "66.66%"
        : props.lg === 9
        ? "75%"
        : props.lg === 10
        ? "83.33%"
        : props.lg === 11
        ? "91.66%"
        : "100%"};
  }

  @media (min-width: 1200px) {
    width: ${(props) =>
      props.xl === 1
        ? "8.33%"
        : props.xl === 2
        ? "16.66%"
        : props.xl === 3
        ? "25%"
        : props.xl === 4
        ? "33.33%"
        : props.xl === 5
        ? "41.66%"
        : props.xl === 6
        ? " 50%"
        : props.xl === 7
        ? "58.33%"
        : props.xl === 8
        ? "66.66%"
        : props.xl === 9
        ? "75%"
        : props.xl === 10
        ? "83.33%"
        : props.xl === 11
        ? "91.66%"
        : "100%"};
  }
`;

export default Column;
