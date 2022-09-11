import React, { useState } from "react";
import { Row, Column, Book, Flex, Button } from "../components";
import { Tabs, Tab } from "../components/Tabs";
import { Pagination, PageItem } from "../components/Pagination";
import {
  Form,
  FormContainer,
  FormInput,
  FormInputGroup,
} from "../components/Form";
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
        justifyContent='space-between'
        alignItems='center'
        mdFlexDirection='column'>
        <div>
          <small>
            <i className='fas fa-warning text-main-color'></i> Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Optio, at.
          </small>
        </div>
        <FormContainer>
          <Form>
            <FormInputGroup>
              <FormInput placeholder='search for books ...' />
              <Button small>
                <i className='fas fa-search'></i>
              </Button>
            </FormInputGroup>
          </Form>
        </FormContainer>
      </Flex>
      <hr />
      <Tabs height={1500}>
        <Tab title={"All geners"} active>
          <Row>
            <Column xl={12} lg={12} md={12} sm={12}>
              <>
                <Row className='mt-1'>
                  {books.map(book => (
                    <Column xl={4} lg={4} md={6} sm={12} key={book.id}>
                      <Book book={book} />
                    </Column>
                  ))}
                </Row>
                <hr />
                <Pagination>
                  <PageItem to='#'>
                    <span>&laquo;</span>
                  </PageItem>
                  <PageItem active={"true"}>1</PageItem>
                  <PageItem>2</PageItem>
                  <PageItem>3</PageItem>
                  <PageItem>4</PageItem>
                  <PageItem>5</PageItem>
                  <PageItem to='#'>
                    <span>&raquo;</span>
                  </PageItem>
                </Pagination>
              </>
            </Column>
          </Row>
        </Tab>
        {genres.map(genre => (
          <Tab key={genre} title={genre}>
            <Row>
              <Column xl={12} lg={12} md={12} sm={12}>
                <>
                  <Row className='mt-1'>
                    {books.map(book => (
                      <Column xl={4} lg={4} md={6} sm={12} key={book.id}>
                        <Book book={book} />
                      </Column>
                    ))}
                  </Row>
                  <hr />
                  <Pagination>
                    <PageItem to='#'>
                      <span>&laquo;</span>
                    </PageItem>
                    <PageItem active={"true"}>1</PageItem>
                    <PageItem>2</PageItem>
                    <PageItem>3</PageItem>
                    <PageItem>4</PageItem>
                    <PageItem>5</PageItem>
                    <PageItem to='#'>
                      <span>&raquo;</span>
                    </PageItem>
                  </Pagination>
                </>
              </Column>
            </Row>
          </Tab>
        ))}
      </Tabs>
    </>
  );
};

export default BooksPage;
