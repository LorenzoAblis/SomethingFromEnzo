import { Link } from "react-router-dom";
import { redvelvet, meibday, macarons } from "../../assets/index.js";
import "./styles/Featured.scss";
import SectionTitle from "../../components/SectionTitle.jsx";

const Featured = () => {
  const featured = [
    {
      title: "Red Velvet Cake",
      baker: "Enzo Ablis",
      image: redvelvet,
    },
    {
      title: "Fondant Lemon Cake",
      baker: "Florence Ablis",
      image: meibday,
    },
    {
      title: "Chocolate Macarons",
      baker: "Enzo Ablis",
      image: macarons,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="info featured" id="featured">
      <SectionTitle title="Sweet Perfection" subtitle="Featured" />
      <div className="featured-cards">
        {featured.map((item, index) => (
          <div key={index} className="featured-card">
            <img src={item.image} alt={item.image} />
            <h4>{item.title}</h4>
            <p>{item.baker}</p>
          </div>
        ))}
      </div>
      <Link to="/SomethingFromEnzo/gallery" onClick={scrollToTop}>
        View All Creations
      </Link>
    </section>
  );
};

export default Featured;
