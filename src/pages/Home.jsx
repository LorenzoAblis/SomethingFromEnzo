import { Link } from "react-router-dom";

import * as images from "../assets";
import Handwriting from "../assets/icons/Handwriting.jsx";
import ScrollArrow from "../components/ScrollArrow.jsx";
import "./styles/Home.scss";

const Home = () => {
  const featured = [
    {
      title: "Red Velvet Cake",
      baker: "Enzo Ablis",
      image: "redvelvet",
    },
    {
      title: "Fondant Lemon Cake",
      baker: "Florence Ablis",
      image: "meibday",
    },
    {
      title: "Chocolate Macarons",
      baker: "Enzo Ablis",
      image: "macarons",
    },
  ];

  const aboutUs = [
    {
      date: "1977",
      text: "My grandma rocked the baking scene in the Philippines, kicking off her cake-selling gig and even opening her own cozy cake shop.",
      image: "abt1",
    },
    {
      date: "2013",
      text: "When our family moved to America, my mom decided to sell cakes just like my grandma.",
      image: "abt2",
    },
    {
      date: "2018",
      text: "I tried my hand at baking for the first time, but let's just say it wasn't pretty. Baking wasn't exactly my forte at that point.",
      image: "abt3",
    },
    {
      date: "2022",
      text: "I got back into the kitchen. Turns out, baking was actually extremely enjoyable and stress-free. Baking became my happy place where I continue to make cakes/pasteries.",
      image: "chocolate",
    },
  ];

  const links = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Featured",
      link: "#featured",
    },
    {
      name: "History",
      link: "#history",
    },
    {
      name: "Products",
      link: "#products",
    },
  ];

  const products = [
    {
      name: "Cakes",
      text: "We primarily make cakes and have been doing so since the start.",
      image: "cake",
    },
    {
      name: "Baked Goods",
      text: "We also make bread, cookies, and other goodies to compliment our cakes.",
      image: "muffin",
    },
    {
      name: "French Cuisine",
      text: "Recently, I've been expirementing with french pastries and I've been loving it.",
      image: "croissant",
    },
  ];

  return (
    <main>
      <div>
        <img src={images.home_image} alt="home image" className="home-image" />
        <div className="overlay"></div>
        <Handwriting />
      </div>
      <section className="homemade">
        <img src={images.homemade} alt="homemade" />
        <div>
          <h2>Homemade Deliciousness</h2>
          <p>
            Welcome to Something From Enzo, where every creation is a labor of
            love. From meticulously designed cakes to whimsical cupcakes, each
            piece showcases my dedication to craftsmanship and passion for
            baking.
          </p>
        </div>
      </section>
      <section className="info featured" id="featured">
        <h3>Featured</h3>
        <h2>Sweet Perfection</h2>
        <div>
          {featured.map((item, index) => (
            <div key={index}>
              <img src={images[item.image]} alt={item.image} />
              <h4>{item.title}</h4>
              <p>{item.baker}</p>
            </div>
          ))}
        </div>
        <Link to="">View All Creations</Link>
      </section>
      <section className="info about" id="history">
        <h3>About Us</h3>
        <h2>How did it start?</h2>
        <div>
          {aboutUs.map((item, index) => (
            <div key={index}>
              <h4>{item.date}</h4>
              <p>{item.text}</p>
              <img src={images[item.image]} alt={item.image} />
            </div>
          ))}
        </div>
        <ScrollArrow />
      </section>
      <section className="info product" id="products">
        <h3>Sweets</h3>
        <h2>What do we make?</h2>
        <div>
          {products.map((item, index) => (
            <div key={index}>
              <div className="oval"></div>
              <img src={images[item.image]} alt={item.image} />
              <h4>{item.name}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="info contact">
        <p>Crafting delicious memories, one bite at a time.</p>
        <div>
          <img src={images["logo"]} alt="logo" />
          <div>
            <hr />
            <h3>Questions?</h3>
            <hr />
          </div>
          <h2>lablis228609@gmail.com</h2>
        </div>
        <ul>
          {links.map((link, index) => (
            <>
              <li key={index}>
                <a href={link.link}>{link.name}</a>
              </li>
              <hr />
            </>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
