import { cake, muffin, croissant } from "../../assets/index.js";
import ScrollArrow from "../../components/ScrollArrow.jsx";
import "./styles/Products.scss";

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
      <h3>Sweets</h3>
      <h2>What do we make?</h2>
      <div id="product-scroll">
        {products.map((item, index) => (
          <div key={index}>
            <div className="oval">wdwd</div>
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
