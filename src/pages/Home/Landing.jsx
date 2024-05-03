import Handwriting from "../../assets/icons/Handwriting.jsx";
import { home_image, homemade } from "../../assets/index.js";
import "./styles/Landing.scss";
import SectionTitle from "../../components/SectionTitle.jsx";

const Landing = () => {
  return (
    <>
      <div className="handwriting-title">
        <img src={home_image} alt="home image" className="home-image" />
        <div className="overlay"></div>
        <Handwriting />
      </div>
      <section className="homemade">
        <SectionTitle title="Homemade Deliciousness" subtitle="Welcome" />
        <img src={homemade} alt="homemade" />
        <p>
          Welcome to Something From Enzo, where every creation is a labor of
          love. From meticulously designed cakes to whimsical cupcakes, each
          piece showcases my dedication to craftsmanship and passion for baking.
        </p>
      </section>
    </>
  );
};

export default Landing;
