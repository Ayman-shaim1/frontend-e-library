import React from "react";
import { Row, Column } from "../components";
const BooksPage = () => {
  return (
    <Row>
      <Column size={1}>
        <div style={{ backgroundColor: "red", padding: "20px" }}></div>
      </Column>
      <Column size={3}>
        <div style={{ backgroundColor: "blue", padding: "20px" }}></div>
      </Column>
      <Column size={1}>
        <div style={{ backgroundColor: "green", padding: "20px" }}></div>
      </Column>
    </Row>
  );
};

export default BooksPage;
