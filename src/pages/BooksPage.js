import React, { useState } from "react";
import { Row, Column, Book } from "../components";
import { Tab, TabItem } from "../components/Tab";

import { books } from "../data";

const BooksPage = () => {
  const [genres] = useState([
    "Buisness",
    "Science",
    "Fiction",
    "Philosophy",
    "Biography",
  ]);

  return (
    <>
      <Row>
        <Column xl={4} lg={4} md={12} sm={12}>
          <Tab>
            <TabItem active={"true"}>All genres</TabItem>
            {genres.map((genre) => (
              <TabItem key={genre}>{genre}</TabItem>
            ))}
          </Tab>
        </Column>
        <Column xl={8} lg={8} md={12} sm={12}>
          <Row>
            {books.map((book) => (
              <Column xl={4} lg={4} md={6} sm={12} key={book.id}>
                <Book book={book} />
              </Column>
            ))}
          </Row>
        </Column>
      </Row>
    </>
  );
};

export default BooksPage;
