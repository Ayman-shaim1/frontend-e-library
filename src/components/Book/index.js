import React from "react";
import { Card, ButtonLink } from "../index";
const Book = ({ book }) => {
  return (
    <Card>
      <img src={book.poster} alt="book-poster" style={{ width: "100%" }} />
      <h5>{book.title}</h5>
      <ButtonLink to={`/book/${book.id}`} block>
        view detail
      </ButtonLink>
    </Card>
  );
};

export default Book;
