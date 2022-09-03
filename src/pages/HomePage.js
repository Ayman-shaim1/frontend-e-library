import React from "react";
import { ButtonLink, Center } from "../components";

const HomePage = () => {
  return (
    <>
      <div className='p-2 bg-main'>
        <Center>
          <h1 className='mb-0' style={{ fontSize: "60px" }}>
            <i className='fa-solid fa-book-open'></i>
          </h1>
        </Center>
        <Center>
          <h1 className='mb-0'>E-library</h1>
        </Center>
        <Center>
          <p className='text-align-justify'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            error. Sunt vero et corporis iste dolores. Beatae ipsam quaerat
            sequi dicta laudantium ad, odit ut ex voluptatum excepturi
            necessitatibus vel! Placeat itaque libero fuga numquam repellat
            tempore nemo laboriosam, cum accusantium pariatur minus ab ex
            laudantium corporis reprehenderit sint ducimus qui. Fuga reiciendis
            voluptatibus dolorum quod, a est esse eligendi quasi. Ab laboriosam
            similique quo blanditiis excepturi obcaecati eius quas, earum
            laborum, quidem tempora minus doloremque ad beatae quibusdam sit
            explicabo. Ducimus iste aliquam, dicta amet cum doloremque odit quos
            unde, nesciunt, expedita voluptatum atque inventore minus facilis
            quam dolores!
          </p>
        </Center>
      </div>
      <ButtonLink block className='mt-2' to="/Books">
        books
      </ButtonLink>
    </>
  );
};

export default HomePage;
