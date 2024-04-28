import { abt1, abt2, abt3, chocolate } from "../../assets/index.js";
import ScrollArrow from "../../components/ScrollArrow.jsx";
import "./styles/History.scss";

const History = () => {
  const aboutUs = [
    {
      date: "1977",
      text: "My grandma rocked the baking scene in the Philippines, kicking off her cake-selling gig and even opening her own cozy cake shop.",
      image: abt1,
    },
    {
      date: "2013",
      text: "When our family moved to America, my mom decided to sell cakes just like my grandma.",
      image: abt2,
    },
    {
      date: "2018",
      text: "I tried my hand at baking for the first time, but let's just say it wasn't pretty. Baking wasn't exactly my forte at that point.",
      image: abt3,
    },
    {
      date: "2022",
      text: "I got back into the kitchen. Turns out, baking was actually extremely enjoyable and stress-free. Baking became my happy place where I continue to make cakes/pasteries.",
      image: chocolate,
    },
  ];

  return (
    <section className="info about" id="history">
      <h3>About Us</h3>
      <h2>How did it start?</h2>
      <div>
        {aboutUs.map((item, index) => (
          <div key={index}>
            <h4>{item.date}</h4>
            <p>{item.text}</p>
            <img src={item.image} alt={item.image} />
          </div>
        ))}
      </div>
      <ScrollArrow />
    </section>
  );
};

export default History;
