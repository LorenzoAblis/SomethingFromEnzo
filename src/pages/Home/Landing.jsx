import Handwriting from "../../assets/icons/Handwriting.jsx";
import { home_image, homemade } from "../../assets/index.js";
import "./styles/Landing.scss";

const Landing = () => {
  return (
    <>
      <div>
        <img src={home_image} alt="home image" className="home-image" />
        <div className="overlay"></div>
        <Handwriting />
      </div>
      <section className="homemade">
        <img src={homemade} alt="homemade" />
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
    </>
  );
};

export default Landing;
