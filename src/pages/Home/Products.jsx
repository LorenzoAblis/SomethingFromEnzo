import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

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
      text: "Recently, I've been expirementing with french pastries and I've been loving it.",
      image: croissant,
    },
  ];

  useEffect(() => {
    if (myElementIsVisible && !productsAnimated) {
      setProductsAnimated(true);
    }
  }, [myElementIsVisible, productsAnimated]);

  return (
    <section className="info product" id="products" ref={myRef}>
      <SectionTitle title="What do we make?" subtitle="Sweets" />
      <div id="product-scroll" className="product-scroll">
        {products.map((item, index) => (
          <div
            key={index}
            className={`product-card ${
              productsAnimated ? "animate-cards" : ""
            }`}
          >
            <div className="img-container">
              <img
                src={item.image}
                alt={item.image}
                loading="lazy"
                className={`${productsAnimated ? "animate-img" : ""}`}
                style={{
                  animationDelay: `${index === 0 ? 1000 : index * 1000}ms`,
                }}
              />
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
