import { meibday } from "../../assets";
import "./styles/About.scss";
import PageTitle from "../../components/PageTitle";
import Introduction from "./Introduction";
import History from "./History";
import Closing from "./Closing";

const About = () => {
  return (
    <main className="about-page">
      <PageTitle title="About" img={meibday} />
      <Introduction />
      <History />
      <Closing />
    </main>
  );
};

export default About;
