import Layout from "../../components/Layout";
import Landing from "./Landing.jsx";
import Featured from "./Featured.jsx";
import History from "./History.jsx";
import Products from "./Products.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  return (
    <Layout>
      <Landing />
      <Featured />
      <History />
      <Products />
      <Contact />
    </Layout>
  );
};

export default Home;
