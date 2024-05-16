import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { meibday } from "../../assets";
import "./styles/About.scss";
import PageTitle from "../../components/PageTitle";
import Introduction from "./Introduction";
import History from "./History";
import Closing from "./Closing";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = document.getElementById("time-cards");
    const timeCards = gsap.utils.toArray(".time-card");
    gsap.to(timeCards, {
      xPercent: -120 * (timeCards.length - 1),
      ease: "sine.out",
      scrollTrigger: {
        trigger: section,
        pin: ".pinned-container",
        scrub: true,
        snap: 1 / (timeCards.length - 1),
        end: "+=" + section.offsetWidth,
      },
    });
  }, []);

  return (
    <main className="about-page">
      <div className="pinned-container">
        <PageTitle title="About" img={meibday} />
        <Introduction />
        <History />
        <Closing />
      </div>
    </main>
  );
};

export default About;
