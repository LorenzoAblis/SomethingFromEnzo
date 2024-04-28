import { Link } from "react-router-dom";
import { redvelvet, meibday, macarons } from "../../assets/index.js";
import "./styles/Featured.scss";

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
  return (
    <section className="info featured" id="featured">
      <h3>Featured</h3>
      <h2>Sweet Perfection</h2>
      <div>
        {featured.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.image} />
            <h4>{item.title}</h4>
            <p>{item.baker}</p>
          </div>
        ))}
      </div>
      <Link to="/SomethingFromEnzo/gallery">View All Creations</Link>
    </section>
  );
};

export default Featured;
