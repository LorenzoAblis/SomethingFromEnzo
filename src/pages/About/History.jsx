import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { abt1, abt2, abt3, momday, redvelvet } from "../../assets";
import "./styles/History.scss";
import SectionTitle from "../../components/SectionTitle";

const History = () => {
  const timeline = [
    {
      date: "1977",
      text: `In the Philippines, my grandma would receive orders from people who wanted to try her culinary creations.
      Eventually, she sold cakes to her neighbors and that's where all of this started. Later on, she passed her techniques 
      and knowledge to my mom who did the same to me.`,
      image: abt1,
    },
    {
      date: "2013",
      text: `When my family moved to America, my mom took a break from being a nurse in order to take care of me. During this time,
      she wanted to use her skills to make some money on the side. She started to get more and more orders from people so she decided
      to create an official name and logo. She decided on "Somethin' From Enzo", naming it after me.`,
      image: abt2,
    },
    {
      date: "2018",
      text: `My mom started to work as a nurse again and we had a lot of baking supplies and tools laying around. I was curious
      and wanted to make my own cakes. Growing up, I watched my mom make some and I thought that it was easy and simple. Turns out,
      it was harder than I thought and my first cake was extremely flaky and dry. After this, I gave up and thought that my baking
      career was over.`,
      image: abt3,
    },
    {
      date: "2022",
      text: `Fast forward a few years, I wanted to make something special for my mom since it was Mother's Day. I decided that I'd
      make a cake for her. I chose a simple mousse cake to make and when I started making it, I gained a sense of motivation to make
      more. However, I'd lose this motivation shortly after.`,
      image: momday,
    },
    {
      date: "2024",
      text: `On valentine's I made a redvelvet cake with some decorations. During this, I regained the motivation to bake. Eventually, I wanted more than cakes
      and now I'm expirementing with French and Italian pastries. From now on, I hope to keep making more and refining my skills further!`,
      image: redvelvet,
    },
  ];

  const timeCardsRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const h4 = entry.target.querySelector("h4");
              const p = entry.target.querySelector("p");

              gsap.from(h4, {
                y: "-100%",
                ease: "bounce.out",
                duration: 1,
              });
              gsap.from(p, {
                y: "100%",
                ease: "bounce.out",
                duration: 1,
              });

              // Unobserve the target after animation is triggered
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.9 }
      );

      timeCardsRef.current.forEach((card) => {
        observer.observe(card);
      });

      return () => {
        observer.disconnect(); // Disconnect the observer when component unmounts
      };
    }
  }, []);

  return (
    <>
      <section className="history" id="history">
        <SectionTitle title="Our Story" subtitle="History" />
        <div className="time-cards">
          {timeline.map((time, index) => (
            <div
              className="time-card"
              key={index}
              ref={(el) => (timeCardsRef.current[index] = el)}
            >
              <h4>{time.date}</h4>
              <LazyLoadImage src={time.image} alt={`${time.image} image`} />
              <p>{time.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default History;
