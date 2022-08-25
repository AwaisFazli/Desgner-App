import "./styles/Header/Header.css";
import "./styles/SlideShow/slideshow.css";
import "./styles/main/main.css";
import SlideShow from "./components/SlideShow";
import Navbar from "./components/Navbar";
import LongCards from "./components/LongCards";
import Design1 from "./assets/Design11.jpg";
import Design2 from "./assets/Design21.jpg";
import Design3 from "./assets/Design31.jpg";
import Design4 from "./assets/Design11.jpg";

function App() {
  const serviceCardsData = [
    {
      title: "Residential Interiors",
      content: `Exclusive residential interiors 
      interiors for the appartments, villas, penthouses worldwide.(Wright style and stone hoses) with a complete
      package of documentation`,
      img: Design1,
    },
    {
      title: "Business Interiors",
      content: `Exclusive cpmmercial interiors 
      for the restaurants and cafes, offices, hotels and other
       business.(Wright style and stone hoses) with a complete
       package of documentation`,
      img: Design2,
    },
    {
      title: "Architectural design",
      content: `Complex architecture design 
      (Wright style and stone hoses) with a complete
      package of documentation(Wright style and stone hoses) with a complete
      package of documentation`,
      img: Design3,
    },
    {
      title: "General contract",
      content: `Dismantling, utility assembling, 
      shell and core condition and fine finishing works, furniture& lighting
      and decor arrangement.(Wright style and stone hoses) with a complete
      package `,
      img: Design4,
    },
  ];

  return (
    <div className="w-full h-full background">
      <section className="">
        <div className="w-full">
          <SlideShow />
          <div>
            <Navbar />
          </div>
        </div>
      </section>
      <section className="flex my-32 background">
        <div className="mx-12 text-white w-2/5">
          <h1 className="text-4xl font-serif my-2 font-semibold">
            Interior design, architecture and construction
          </h1>
          <h2 className=" text-4xl my-2 text-[#B99572]">
            Based in Saint Petersburg, we work worldwide
          </h2>
          <div className="opacity-40 text-sm">
            <p>
              Studia 54 group consists of 3 unique brands, with its business
              scope covering all sectors of the world of interior design and
              architecture. By creating projects in our unique one-of-a-kind
              style, we aim to become one of the best international design
              bureau. Our team of experts from a wide variety of areas make
              dreams of a luxurious and comfortable life come true.
            </p>
            <br />
            <p>
              The art of living in the style of Studia 54 can be described as
              the manifesto of individuality, ongoing creative search and modern
              view on heritage. We create a new quality of life by providing our
              clients with a sense of exclusivity for many years forward. From
              the beginning of the design project to the furniture production,
              we design a luxurious lifestyle, offering a unique method of
              working with the customer and high-quality service.
            </p>
            <br />
            <p>
              The unique concept of the group is based on three key elements,
              including inner growth, the principle of "interior as art" and
              diverse creative approach. We follow global trends, draw
              inspiration from the world of fashion and design, and expand the
              geography of our projects.
            </p>
            <br />
            <p>
              Our success defines our vision of modern luxury in a global
              perspective, the quality of services and the responsible creative
              approach of our team. It allows us to achieve new goals with every
              new project and become a part of the design of the future.
            </p>
          </div>
        </div>
        <div className="w-2/3 ">
          <img src={Design1} alt="" />
        </div>
      </section>

      <section>
        <div className="flex w-full">
          {serviceCardsData.map((value) => (
            <LongCards
              image={value.img}
              paragraph={value.content}
              tag={value.title}
              className="w=1/4"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
