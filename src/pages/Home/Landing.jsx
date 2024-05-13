import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import anime from "animejs/lib/anime.es.js";

import Handwriting from "../../assets/icons/Handwriting.jsx";
import { home_image, homemade } from "../../assets/index.js";
import "./styles/Landing.scss";
import SectionTitle from "../../components/SectionTitle.jsx";

const Landing = () => {
  const { ref: desktopRef, inView: desktopIsVisible } = useInView();
  const { ref: mobileRef, inView: mobileIsVisible } = useInView();
  const [landingAnimated, setLandingAnimated] = useState(false);

  useEffect(() => {
    if ((desktopIsVisible || mobileIsVisible) && !landingAnimated) {
      anime({
        targets: ".homemade-text, .homemade p, .homemade .section-header",
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: "easeInOutSine",
      });

      anime({
        targets: ".homemade img",
        translateX: [500, 0],
        opacity: [0, 1],
        easing: "easeInOutExpo",
      });

      setLandingAnimated(true);
    }
  }, [desktopIsVisible, mobileIsVisible, landingAnimated]);

  return (
    <>
      <div className="handwriting-title">
        <LazyLoadImage
          src={home_image}
          alt="home image"
          className="home-image"
        />
        <div className="overlay"></div>
        <Handwriting />
      </div>
      <section className="homemade hidden-on-desktop" ref={desktopRef}>
        <SectionTitle title="Homemade Deliciousness" subtitle="Welcome" />
        <LazyLoadImage src={homemade} alt="homemade" />
        <p>
          Welcome to Something From Enzo, where every creation is a labor of
          love. From meticulously designed cakes to whimsical cupcakes, each
          piece showcases my dedication to craftsmanship and passion for baking.
        </p>
      </section>
      <section className="homemade hidden-on-mobile" ref={mobileRef}>
        <LazyLoadImage src={homemade} alt="homemade" />
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
