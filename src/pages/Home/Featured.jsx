import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import anime from "animejs/lib/anime.es.js";

import { Link } from "react-router-dom";
import { redvelvet, meibday, macarons } from "../../assets/index.js";
import "./styles/Featured.scss";
import SectionTitle from "../../components/SectionTitle.jsx";

const Featured = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const [featuredAnimated, setFeaturedAnimated] = useState(false);

  const featured = [
    {
      title: "Red Velvet Cake",
      baker: "Enzo Ablis",
      image: redvelvet,
    },
    {
      title: "Fondant Lemon Cake",
      baker: "Florence Ablis",
      image: meibday,
    },
    {
      title: "Chocolate Macarons",
      baker: "Enzo Ablis",
      image: macarons,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (myElementIsVisible && !featuredAnimated) {
      featured.forEach((item, index) => {
        anime({
          targets: `.featured-card:nth-child(${index + 1})`,
          translateY: [-200, 0],
          opacity: [0, 1],
          delay: index * 500,
          easing: "easeInOutQuad",
        });
      });
      setFeaturedAnimated(true);
    }
  }, [myElementIsVisible, featuredAnimated, featured]);

  return (
    <section className="info featured" id="featured">
      <SectionTitle title="Sweet Perfection" subtitle="Featured" />
      <div className="featured-cards" ref={myRef}>
        {featured.map((item, index) => (
          <div key={index} className="featured-card">
            <LazyLoadImage effect="blur" src={item.image} alt={item.image} />
            <h4>{item.title}</h4>
            <p>{item.baker}</p>
          </div>
        ))}
      </div>
      <Link to="/SomethingFromEnzo/gallery" onClick={scrollToTop}>
        View All Creations
      </Link>
    </section>
  );
};

export default Featured;
