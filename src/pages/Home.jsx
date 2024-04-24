import home_image from "../assets/home_image.jpg";
import Handwriting from "../components/Handwriting";

import "./styles/Home.scss";

const Home = () => {
  return (
    <main>
      <div>
        <img src={home_image} alt="home image" className="home-image" />
        <Handwriting />
      </div>
    </main>
  );
};

export default Home;
