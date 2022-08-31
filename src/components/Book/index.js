import React from "react";
import { Card, ButtonLink } from "../index";
const Book = ({ book }) => {
  return (
    <Card>
      <img src={book.poster} alt="book-poster" style={{ width: "100%" }} />
      <h5 className="text-secondary-color">{book.title}</h5>
      <ButtonLink to={`/book/${book.id}`} block={"true"} small={"true"}>
        view detail
      </ButtonLink>
    </Card>
  );
};

export default Book;
