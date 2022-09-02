import React, { useState } from "react";
import { Row, Column, Book } from "../components";
import { Tab, TabItem } from "../components/Tab";
import { Pagination, PageItem } from "../components/Pagination";

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
        <Column xl={3} lg={3} md={12} sm={12}>
          <Tab type="vertical">
            <TabItem active={"true"}>All genres</TabItem>
            {genres.map((genre) => (
              <TabItem key={genre}>{genre}</TabItem>
            ))}
          </Tab>
        </Column>
        <Column xl={9} lg={9} md={12} sm={12}>
          <>
            <Row>
              {books.map((book) => (
                <Column xl={4} lg={4} md={6} sm={12} key={book.id}>
                  <Book book={book} />
                </Column>
              ))}
            </Row>
            <Pagination>
              <PageItem to="#">
                <span>&laquo;</span>
              </PageItem>
              <PageItem active={"true"}>1</PageItem>
              <PageItem>2</PageItem>
              <PageItem>3</PageItem>
              <PageItem>4</PageItem>
              <PageItem>5</PageItem>
              <PageItem to="#">
                <span>&raquo;</span>
              </PageItem>
            </Pagination>
          </>
        </Column>
      </Row>
    </>
  );
};

export default BooksPage;
