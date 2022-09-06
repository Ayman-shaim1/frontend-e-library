import React from "react";
import { Button, ButtonLink, Center, Loader } from "../components";
import { GlobalLoading } from "../utils/";
const HomePage = () => {
  return (
    <>
      <Center>
        <Loader />
      </Center>
      <Button
        className="my-1"
        block
        onClick={() => {
          GlobalLoading.show();
          setTimeout(GlobalLoading.hide, 5000);
        }}
      >
        show loading
      </Button>

      <section className="p-3 bg-main mb-2">
        <Center>
          <span className="mb-0" style={{ fontSize: "100px" }}>
            <i className="fa-solid fa-book-open"></i>
          </span>
        </Center>
        <Center>
          <h1 className="mb-0">E-library</h1>
        </Center>
        <Center>
          <p className="text-align-justify">
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
        <Center>
          <ButtonLink to="/books" color="secondary">
            books
          </ButtonLink>
        </Center>
      </section>

      <section className="p-2 mb-2">
        <h2> Lorem ipsum dolor sit amet consectetur.</h2>
        <Center>
          <p className="text-align-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est
            ab sit fuga incidunt? Debitis animi sapiente suscipit atque aliquam
            ipsa corrupti aperiam repellendus non quos reiciendis eum
            repudiandae, expedita eligendi incidunt fugit, alias et vitae eius,
            vel ipsum explicabo provident soluta doloremque! Praesentium saepe
            nobis dicta alias minima unde hic ullam doloremque rerum maxime enim
            facilis expedita, rem ipsa consequatur vitae voluptate
            exercitationem. Explicabo debitis minima possimus praesentium
            impedit optio totam sequi harum at quibusdam, non nemo quo vel fugit
            dicta obcaecati ducimus natus ex sed molestiae blanditiis.
            Perspiciatis aliquam saepe labore doloremque a ratione delectus
            commodi repellat quasi dicta, voluptas, voluptatum veritatis.
            Laborum officia porro saepe molestias nesciunt inventore eaque. At
            suscipit, aperiam praesentium et laboriosam id, accusamus aliquam
            labore similique quidem, tempora sapiente tempore accusantium? Nisi
            inventore laborum, recusandae debitis aperiam accusantium quis iste
            pariatur, aliquid unde beatae, totam suscipit voluptas. Iure
            deserunt quod libero dolores enim totam soluta vero quisquam quo
            repellat quasi temporibus magni ducimus eius obcaecati, accusantium
            vitae molestiae consequatur dolor aliquid, sapiente itaque.
            Veritatis fugit delectus perferendis omnis, tenetur, commodi quo
            repellat reiciendis quibusdam incidunt culpa. Iste vero vitae ullam
            error, odio fuga adipisci voluptatem. Eaque atque laboriosam, animi
            architecto pariatur praesentium minima.
          </p>
        </Center>
      </section>

      <section className="p-2 mb-2">
        <h2> Lorem ipsum dolor sit amet consectetur.</h2>
        <Center>
          <p className="text-align-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est
            ab sit fuga incidunt? Debitis animi sapiente suscipit atque aliquam
            ipsa corrupti aperiam repellendus non quos reiciendis eum
            repudiandae, expedita eligendi incidunt fugit, alias et vitae eius,
            vel ipsum explicabo provident soluta doloremque! Praesentium saepe
            nobis dicta alias minima unde hic ullam doloremque rerum maxime enim
            facilis expedita, rem ipsa consequatur vitae voluptate
            exercitationem. Explicabo debitis minima possimus praesentium
            impedit optio totam sequi harum at quibusdam, non nemo quo vel fugit
            dicta obcaecati ducimus natus ex sed molestiae blanditiis.
            Perspiciatis aliquam saepe labore doloremque a ratione delectus
            commodi repellat quasi dicta, voluptas, voluptatum veritatis.
            Laborum officia porro saepe molestias nesciunt inventore eaque. At
            suscipit, aperiam praesentium et laboriosam id, accusamus aliquam
            labore similique quidem, tempora sapiente tempore accusantium? Nisi
            inventore laborum, recusandae debitis aperiam accusantium quis iste
            pariatur, aliquid unde beatae, totam suscipit voluptas. Iure
            deserunt quod libero dolores enim totam soluta vero quisquam quo
            repellat quasi temporibus magni ducimus eius obcaecati, accusantium
            vitae molestiae consequatur dolor aliquid, sapiente itaque.
            Veritatis fugit delectus perferendis omnis, tenetur, commodi quo
            repellat reiciendis quibusdam incidunt culpa. Iste vero vitae ullam
            error, odio fuga adipisci voluptatem. Eaque atque laboriosam, animi
            architecto pariatur praesentium minima.
          </p>
        </Center>
      </section>

      <section className="p-2 mb-2">
        <h2> Lorem ipsum dolor sit amet consectetur.</h2>
        <Center>
          <p className="text-align-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est
            ab sit fuga incidunt? Debitis animi sapiente suscipit atque aliquam
            ipsa corrupti aperiam repellendus non quos reiciendis eum
            repudiandae, expedita eligendi incidunt fugit, alias et vitae eius,
            vel ipsum explicabo provident soluta doloremque! Praesentium saepe
            nobis dicta alias minima unde hic ullam doloremque rerum maxime enim
            facilis expedita, rem ipsa consequatur vitae voluptate
            exercitationem. Explicabo debitis minima possimus praesentium
            impedit optio totam sequi harum at quibusdam, non nemo quo vel fugit
            dicta obcaecati ducimus natus ex sed molestiae blanditiis.
            Perspiciatis aliquam saepe labore doloremque a ratione delectus
            commodi repellat quasi dicta, voluptas, voluptatum veritatis.
            Laborum officia porro saepe molestias nesciunt inventore eaque. At
            suscipit, aperiam praesentium et laboriosam id, accusamus aliquam
            labore similique quidem, tempora sapiente tempore accusantium? Nisi
            inventore laborum, recusandae debitis aperiam accusantium quis iste
            pariatur, aliquid unde beatae, totam suscipit voluptas. Iure
            deserunt quod libero dolores enim totam soluta vero quisquam quo
            repellat quasi temporibus magni ducimus eius obcaecati, accusantium
            vitae molestiae consequatur dolor aliquid, sapiente itaque.
            Veritatis fugit delectus perferendis omnis, tenetur, commodi quo
            repellat reiciendis quibusdam incidunt culpa. Iste vero vitae ullam
            error, odio fuga adipisci voluptatem. Eaque atque laboriosam, animi
            architecto pariatur praesentium minima.
          </p>
        </Center>
      </section>

      <section className="p-2 mb-2">
        <h2> Lorem ipsum dolor sit amet consectetur.</h2>
        <Center>
          <p className="text-align-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est
            ab sit fuga incidunt? Debitis animi sapiente suscipit atque aliquam
            ipsa corrupti aperiam repellendus non quos reiciendis eum
            repudiandae, expedita eligendi incidunt fugit, alias et vitae eius,
            vel ipsum explicabo provident soluta doloremque! Praesentium saepe
            nobis dicta alias minima unde hic ullam doloremque rerum maxime enim
            facilis expedita, rem ipsa consequatur vitae voluptate
            exercitationem. Explicabo debitis minima possimus praesentium
            impedit optio totam sequi harum at quibusdam, non nemo quo vel fugit
            dicta obcaecati ducimus natus ex sed molestiae blanditiis.
            Perspiciatis aliquam saepe labore doloremque a ratione delectus
            commodi repellat quasi dicta, voluptas, voluptatum veritatis.
            Laborum officia porro saepe molestias nesciunt inventore eaque. At
            suscipit, aperiam praesentium et laboriosam id, accusamus aliquam
            labore similique quidem, tempora sapiente tempore accusantium? Nisi
            inventore laborum, recusandae debitis aperiam accusantium quis iste
            pariatur, aliquid unde beatae, totam suscipit voluptas. Iure
            deserunt quod libero dolores enim totam soluta vero quisquam quo
            repellat quasi temporibus magni ducimus eius obcaecati, accusantium
            vitae molestiae consequatur dolor aliquid, sapiente itaque.
            Veritatis fugit delectus perferendis omnis, tenetur, commodi quo
            repellat reiciendis quibusdam incidunt culpa. Iste vero vitae ullam
            error, odio fuga adipisci voluptatem. Eaque atque laboriosam, animi
            architecto pariatur praesentium minima.
          </p>
        </Center>
      </section>
    </>
  );
};

export default HomePage;
