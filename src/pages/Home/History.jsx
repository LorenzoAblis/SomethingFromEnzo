import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

import { abt1, abt2, abt3, chocolate } from "../../assets/index.js";
import ScrollArrow from "../../components/ScrollArrow.jsx";
import "./styles/History.scss";
import SectionTitle from "../../components/SectionTitle.jsx";

const History = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const [historyAnimated, setHistoryAnimated] = useState(false);

  const aboutUs = [
    {
      date: "1977",
      text: "My grandma rocked the baking scene in the Philippines, kicking off her cake-selling gig and even opening her own cozy cake shop.",
      image: abt1,
    },
    {
      date: "2013",
      text: "When our family moved to America, my mom decided to sell cakes just like my grandma.",
      image: abt2,
    },
    {
      date: "2018",
      text: "I tried my hand at baking for the first time, but let's just say it wasn't pretty. Baking wasn't exactly my forte at that point.",
      image: abt3,
    },
    {
      date: "2022",
      text: "I got back into the kitchen. Turns out, baking was actually extremely enjoyable and stress-free. Baking became my happy place where I continue to make cakes/pasteries.",
      image: chocolate,
    },
  ];

  useEffect(() => {
    if (myElementIsVisible && !historyAnimated) {
      anime({
        targets: `#history`,
        translateX: [-1000, 0],
        opacity: [0, 1],
        easing: "linear",
      });

      aboutUs.forEach((item, index) => {
        anime({
          targets: `.history-card:nth-child(${index + 1})`,
          translateY: [-200, 0],
          opacity: [0, 1],
          delay:
            index === 1 || index === 2
              ? 1200
              : index === 0 || index === 3
              ? 1800
              : 0,
          duration: 1000,
          easing: "easeInOutQuad",
        });
      });
      setHistoryAnimated(true);
    }
  }, [myElementIsVisible, historyAnimated, aboutUs]);

  return (
    <section className="info about" id="history">
      <SectionTitle title="How did it start?" subtitle="About Us" />
      <div id="history-scroll" className="history-cards" ref={myRef}>
        {aboutUs.map((item, index) => (
          <div
            key={index}
            className="history-card"
            style={{
              animationDelay: `${
                index === 1 || index === 2
                  ? 1200
                  : index === 0 || index === 3
                  ? 1500
                  : 0
              }ms`,
            }}
          >
            <h4>{item.date}</h4>
            <p>{item.text}</p>
            <img src={item.image} alt={item.image} />
          </div>
        ))}
      </div>
      <ScrollArrow idName="history-scroll" />
    </section>
  );
};

export default History;
