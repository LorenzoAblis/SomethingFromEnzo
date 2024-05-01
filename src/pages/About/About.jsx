import { meibday } from "../../assets";
import "./styles/About.scss";
import Introduction from "./Introduction";
import History from "./History";

const About = () => {
  // const enzoDetails = [
  //   {
  //     text: `Hey! I'm Enzo and I'm passionate about baking delicious
  //     treats. Growing up, I watched my grandma and mom work their magic
  //     in the kitchen, and it inspired me to start my own baking journey.`,
  //     img: images.enzo_about,
  //     img_pos: "left",
  //   },
  //   {
  //     text: `My first cake was a classic chocolate cake shown in the picture
  //     on the right. The presentation wasn't that good but when I tasted it,
  //     I wanted to make more and more.`,
  //     img: images.abt3,
  //     img_pos: "right",
  //   },
  //   {
  //     text: `Eventually, I wanted more than cakes
  //     and now I'm expirementing with French and Italian pastries`,
  //     img: images.macarons,
  //     img_pos: "left",
  //   },
  //   {
  //     text: `I created this website to showcase my creations as well as to
  //     show my web development skills. I hope that the sweets you see here shows
  //     my creativity and craftsmanship!`,
  //     img: images.redvelvet,
  //     img_pos: "right",
  //   },
  // ];

  return (
    <main className="about-page">
      <div className="about-img-container">
        <img src={meibday} alt="about image" className="about-image" />
        <div className="overlay"></div>
        <h1 className="about-title">About</h1>
      </div>
      <h1>This section is WIP</h1>
      <Introduction />
      <History />
    </main>
  );
};

export default About;
