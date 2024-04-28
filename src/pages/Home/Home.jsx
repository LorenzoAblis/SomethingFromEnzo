import "./styles/Home.scss";
import Landing from "./Landing.jsx";
import Featured from "./Featured.jsx";
import History from "./History.jsx";
import Products from "./Products.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  return (
    <main>
      <Landing />
      <Featured />
      <History />
      <Products />
      <Contact />
    </main>
  );
};

export default Home;
