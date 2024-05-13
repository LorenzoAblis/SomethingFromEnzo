import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

import { cake, muffin, croissant } from "../../assets/index.js";
import ScrollArrow from "../../components/ScrollArrow.jsx";
import "./styles/Products.scss";
import SectionTitle from "../../components/SectionTitle.jsx";

const Products = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const [productsAnimated, setProductsAnimated] = useState(false);

  const products = [
    {
      name: "Cakes",
      text: "We primarily make cakes and have been doing so since the start.",
      image: cake,
    },
    {
      name: "Baked Goods",
      text: "We also make bread, cookies, and other goodies to compliment our cakes.",
      image: muffin,
    },
    {
      name: "French Cuisine",
      text: "Recently, I've been experimenting with French pastries and I've been loving it.",
      image: croissant,
    },
  ];

  useEffect(() => {
    if (myElementIsVisible && !productsAnimated) {
      products.forEach((item, index) => {
        anime({
          targets: `.product-card:nth-child(${index + 1})`,
          translateY: [-200, 0],
          opacity: [0, 1],
          delay: index * 400,
          easing: "easeInOutExpo",
        });

        setTimeout(() => {
          setTimeout(() => {
            products.forEach((item, index) => {
              anime({
                targets: `.product-card:nth-child(${
                  index + 1
                }) .img-container img`,
                translateY: [-100, 0],
                opacity: [0, 1],
                delay: index * 600,
                easing: "spring(2, 100, 10, 0)",
              });
            });
            setProductsAnimated(true);
          }, products.length * 300);
        }, 500);
      });

      setProductsAnimated(true);
    }
  }, [myElementIsVisible, productsAnimated, products]);

  return (
    <section className="info product" id="products">
      <SectionTitle title="What do we make?" subtitle="Sweets" />
      <div id="product-scroll" className="product-scroll" ref={myRef}>
        {products.map((item, index) => (
          <div key={index} className="product-card">
            <div className="img-container">
              <img src={item.image} alt={item.image} loading="lazy" />
            </div>
            <h4>{item.name}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <ScrollArrow idName="product-scroll" />
    </section>
  );
};

export default Products;
