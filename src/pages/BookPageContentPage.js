import React, { useState, useEffect } from "react";
import { Center } from "../components";
import { PageItem, Pagination } from "../components/Pagination";
import axios from "axios";
import TextContent from "../textContent.txt";

const BookPageContentPage = () => {
  // states :
  const [text, setText] = useState("");

  const getText = async () => {
    const { data } = await axios.get(TextContent);
    setText(data);
  };
  useEffect(() => {
    getText();
  }, []);

  return (
    <Center>
      <p className='text-align-justify'>{text}</p>
      <Pagination>
        <PageItem>
          <span>&laquo;</span>
        </PageItem>
        <PageItem active={"true"}>1</PageItem>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem>4</PageItem>
        <PageItem>5</PageItem>
        <PageItem>6</PageItem>

        <PageItem>
          <span>&raquo;</span>
        </PageItem>
      </Pagination>
    </Center>
  );
};

export default BookPageContentPage;
