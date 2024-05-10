import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

import Handwriting from "../../assets/icons/Handwriting.jsx";
import { home_image, homemade } from "../../assets/index.js";
import "./styles/Landing.scss";
import SectionTitle from "../../components/SectionTitle.jsx";

const Landing = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const [landingAnimated, setLandingAnimated] = useState(false);

  useEffect(() => {
    if (myElementIsVisible && !landingAnimated) {
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
        <SectionTitle
          title="Homemade Deliciousness"
          subtitle="Welcome"
          className={`${landingAnimated ? "animate-landing-text" : ""}`}
        />
        <img
          src={homemade}
          alt="homemade"
          className={`${landingAnimated ? "animate-landing-img" : ""}`}
        />
        <p className={`${landingAnimated ? "animate-landing-text" : ""}`}>
          Welcome to Something From Enzo, where every creation is a labor of
          love. From meticulously designed cakes to whimsical cupcakes, each
          piece showcases my dedication to craftsmanship and passion for baking.
        </p>
      </section>
      <section className="homemade hidden-on-mobile" ref={myRef}>
        <img
          src={homemade}
          alt="homemade"
          className={`${landingAnimated ? "animate-landing-img" : ""}`}
        />
        <div
          className={`homemade-text ${
            landingAnimated ? "animate-landing-text" : ""
          }`}
        >
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
