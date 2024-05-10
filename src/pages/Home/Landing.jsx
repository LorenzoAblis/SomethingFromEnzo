import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

import Handwriting from "../../assets/icons/Handwriting.jsx";
import { home_image, homemade } from "../../assets/index.js";
import "./styles/Landing.scss";
import SectionTitle from "../../components/SectionTitle.jsx";

const Landing = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const [landingAnimated, setLandingAnimated] = useState(false);

  useEffect(() => {
    if (myElementIsVisible && !landingAnimated) {
      setTimeout(() => {
        anime({
          targets: ".homemade-text, .homemade p, .homemade .section-header",
          translateX: [-500, 0],
          opacity: [0, 1],

          easing: "easeInOutSine",
        });

        anime({
          targets: ".homemade img",
          translateX: [500, 0],
          opacity: [0, 1],
          easing: "easeInOutExpo",
        });
      }, 250);

      setLandingAnimated(true);
    }
  }, [myElementIsVisible, landingAnimated]);

  return (
    <>
      <div className="handwriting-title">
        <img src={home_image} alt="home image" className="home-image" />
        <div className="overlay"></div>
        <Handwriting />
      </div>
      <section className="homemade hidden-on-desktop" ref={myRef}>
        <SectionTitle title="Homemade Deliciousness" subtitle="Welcome" />
        <img src={homemade} alt="homemade" />
        <p>
          Welcome to Something From Enzo, where every creation is a labor of
          love. From meticulously designed cakes to whimsical cupcakes, each
          piece showcases my dedication to craftsmanship and passion for baking.
        </p>
      </section>
      <section className="homemade hidden-on-mobile" ref={myRef}>
        <img src={homemade} alt="homemade" />
        <div className="homemade-text">
          <SectionTitle title="Homemade Deliciousness" subtitle="Welcome" />

          <p>
            Welcome to Something From Enzo, where every creation is a labor of
            love. From meticulously designed cakes to whimsical cupcakes, each
            piece showcases my dedication to craftsmanship and passion for
            baking.
          </p>
        </div>
      </section>
    </>
  );
};

export default Landing;
