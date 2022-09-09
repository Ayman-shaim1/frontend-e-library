import React from "react";
import { Card, ButtonLink, Rating } from "../index";

const Book = ({ book }) => {
  return (
    <Card>
      <img src={book.poster} alt="book-poster" style={{ width: "100%" }} />
      <h5 className="text-secondary-color mb-0">{book.title}</h5>
      <Rating value={book.rating} />
      <ButtonLink
        to={`/book/${book.id}`}
        block={"true"}
        small={"true"}
        className="mt-1"
      >
        view detail
      </ButtonLink>
    </Card>
  );
};

export default Book;
