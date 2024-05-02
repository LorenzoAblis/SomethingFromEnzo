import { meibday } from "../../assets";
import "./styles/About.scss";
import PageTitle from "../../components/PageTitle";
import Introduction from "./Introduction";
import History from "./History";
import Closing from "./Closing";

const About = () => {
  return (
    <main className="about-page">
      <div className="about-img-container">
        <img src={meibday} alt="about image" className="about-image" />
        <div className="overlay"></div>
        <h1 className="about-title">About</h1>
      </div>
      <Introduction />
      <History />
      <Closing />
    </main>
  );
};

export default About;
