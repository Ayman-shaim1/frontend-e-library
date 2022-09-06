import React, { useState } from "react";
import { Row, Column, Book, Flex, Button } from "../components";
import { Tab, TabItem } from "../components/Tab";
import { Pagination, PageItem } from "../components/Pagination";
import { Form, FormInput, FormInputGroup } from "../components/Form";
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
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mdFlexDirection="column"
      >
        <div>
          <small>
            <i className="fas fa-warning text-main-color"></i> Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Optio, at.
          </small>
        </div>
        <Form>
          <FormInputGroup>
            <FormInput placeholder="search for books ..." />
            <Button small>
              <i className="fas fa-search"></i>
            </Button>
          </FormInputGroup>
        </Form>
      </Flex>
      <hr />
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
            <Row className="mt-1">
              {books.map((book) => (
                <Column xl={4} lg={4} md={6} sm={12} key={book.id}>
                  <Book book={book} />
                </Column>
              ))}
            </Row>
            <hr />
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
