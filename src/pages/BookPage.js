import React, { useEffect, useState } from "react";
import { Row, Column, Flex, Center, Button } from "../components";
import { useParams } from "react-router-dom";
import { books } from "../data";

const BookPage = () => {
  // states :
  const [book, setBook] = useState(null);
  // hooks :
  const params = useParams();

  useEffect(() => {
    setBook(books.find((bk) => String(bk.id) === String(params.id)));
  }, [params, book]);

  if (!book) {
    return (
      <Flex
        style={{ height: "500px" }}
        justifyContent="center"
        alignItems="center"
      >
        <p className="text-main-color">Book not found !</p>
      </Flex>
    );
  }
  return (
    <Row>
      <Column xl={6} lg={6} md={6} sm={12}>
        <Center>
          <img src={book.poster} alt="book-poster" style={{ width: "100%" }} />
        </Center>
      </Column>
      <Column xl={6} lg={6} md={6} sm={12}>
        <h3>{book.title}</h3>
        <p>{book.description}</p>

        <table>
          <tbody>
            {book.prices.map((price, index) => (
              <tr key={price[`${index + 1}-months`]}>
                <td>${price[`${index + 1}-months`]}</td>
                <td>for {index + 1} months</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button block className="mt-2">read now</Button>
      </Column>
    </Row>
  );
};

export default BookPage;
