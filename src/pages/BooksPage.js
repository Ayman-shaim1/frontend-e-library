import React from "react";
import { Row, Column, Book } from "../components";
import { books } from "../data";
const BooksPage = () => {
  return (
    <Row>
      {books.map((book) => (
        <Column xl={4} lg={4} md={6} sm={12} key={book.id}>
          <Book book={book} />
        </Column>
      ))}
    </Row>
  );
};

export default BooksPage;
