import { cake, muffin, croissant } from "../../assets/index.js";
import ScrollArrow from "../../components/ScrollArrow.jsx";
import "./styles/Products.scss";
import SectionTitle from "../../components/SectionTitle.jsx";

const Products = () => {
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

  return (
    <section className="info product" id="products">
      <SectionTitle title="What do we make?" subtitle="Sweets" />
      <div id="product-scroll" className="product-scroll">
        {products.map((item, index) => (
          <div key={index} className="product-card">
            <div className="oval"></div>
            <img src={item.image} alt={item.image} />
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
