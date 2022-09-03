import React, { useEffect, useState } from "react";
import {
  Row,
  Column,
  Flex,
  Button,
  Rating,
  Center,
  ButtonLink,
  Book,
} from "../components";
import { useParams } from "react-router-dom";
import { books } from "../data";

const BookPage = () => {
  // states :
  const [book, setBook] = useState(null);
  // hooks :
  const params = useParams();

  useEffect(() => {
    setBook(books.find(bk => String(bk.id) === String(params.id)));
  }, [params, book]);

  if (!book) {
    return (
      <Flex
        style={{ height: "500px" }}
        justifyContent='center'
        alignItems='center'>
        <p className='text-main-color'>Book not found !</p>
      </Flex>
    );
  }
  return (
    <>
      <ButtonLink to='/books' color='secondary' outline>
        <i className='fa-solid fa-arrow-left-long'></i> Books
      </ButtonLink>
      <Row className='my-2'>
        <Column xl={5} lg={5} md={12} sm={12}>
          <img src={book.poster} alt='book-poster' style={{ width: "100%" }} />
        </Column>
        <Column xl={7} lg={7} md={12} sm={12}>
          <h1 className='text-secondary-color'>{book.title}</h1>
          <p>
            <b>Author:</b>&nbsp;
            <span className='text-secondary-color'>{book.author}</span>
          </p>
          <p>
            <b>Genre:</b>&nbsp;
            <span className='text-secondary-color'>{book.genre}</span>
          </p>
          <Rating value={book.rating} text='100.000 voters' />

          <p>{book.description}</p>
          <table>
            <tbody>
              {book.prices.map((price, index) => (
                <tr key={price[`${index + 1}-months`]}>
                  <td>${price[`${index + 1}-months`]}</td>
                  <td>for</td>
                  <td>{index + 1}</td>
                  <td>months</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button block className='my-2'>
            read now
          </Button>
        </Column>
      </Row>
      <hr />
      <Center className='my-1'>
        <h2 className='text-secondary-color'>Related Book</h2>
      </Center>
      <Row>
        {books.map(book => (
          <Column xl={4} lg={4} md={6} sm={12} key={book.id}>
            <Book book={book} />
          </Column>
        ))}
      </Row>
    </>
  );
};

export default BookPage;
