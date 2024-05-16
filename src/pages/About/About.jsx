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
    // Check if window width is more than 1024px
    if (window.innerWidth > 1024) {
      gsap.registerPlugin(ScrollTrigger);
      const section = document.getElementById("history");
      const timeCards = gsap.utils.toArray(".time-card");
      gsap.to(timeCards, {
        xPercent: -130 * (timeCards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: ".pinned-container",
          scrub: 0.5,
          end: "+=" + section.offsetWidth,
        },
      });
    }
  }, []);

  return (
    <main className="about-page">
      <div className="pinned-container">
        <PageTitle title="About" img={meibday} />
        <Introduction />
        <History />
      </div>
      <Closing />
    </main>
  );
};

export default About;
