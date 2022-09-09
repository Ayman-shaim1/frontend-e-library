import React from "react";
import { ButtonLink, Center, Flex, Rating } from "../components";
import { books } from "../data";
import {} from "../utils/";
const ProfilePage = () => {
  return (
    <>
      <div className="bg-gray p-3 mb-5">
        <Flex justifyContent="end">
          <ButtonLink to={"/Settings"} className="m-0" color="secondary">
            <i className="fas fa-gear"></i>
          </ButtonLink>
        </Flex>
        <Center>
          <h1 className="m-0" style={{ fontSize: "80px" }}>
            <i className="fas fa-user"></i>
          </h1>
        </Center>
        <Center>
          <h1 className="m-0">John Doe</h1>
        </Center>
        <Center>
          <h3 className="m-0">John@example.com</h3>
        </Center>
      </div>
      <hr />
      <Center>
        <h1 className="mb-4">The books I'm reading </h1>
      </Center>
      <Center>
        <table>
          <thead>
            <tr>
              <th>Book poster</th>
              <th>Book title</th>
              <th>Book rating</th>
              <th>Book Detail</th>
              <th>Continue Reading</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>
                  <img
                    alt="book-poster"
                    src={book.poster}
                    style={{ width: "80px" }}
                  />
                </td>
                <td>
                  <small>{book.title}</small>
                </td>
                <td>
                  <Rating value={book.rating} />
                </td>
                <td>
                  <ButtonLink to={`/Book/${book.id}`} small>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </ButtonLink>
                </td>
                <td>
                  <ButtonLink
                    to={`/Book/${book.id}/page/1`}
                    small
                    color="secondary"
                  >
                    <i className="fa-solid fa-book-open-reader"></i>
                  </ButtonLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Center>
    </>
  );
};

export default ProfilePage;
