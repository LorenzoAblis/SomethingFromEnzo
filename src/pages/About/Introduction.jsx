import { enzo_intro, flo_intro } from "../../assets";
import "./styles/Introduction.scss";

const Introduction = () => {
  const intros = [
    {
      name: "Enzo",
      text: `Hey! I'm Enzo and I'm passionate about baking delicious
          treats. Baking has been my passion for as long as I can remember,
          and I'm thrilled to share my culinary adventures with you.`,
      image: enzo_intro,
    },
    {
      name: "Florence",
      text: `This is my mom, Florence, who inspired me to start baking 
          and make delicious things. Growing up, I saw her make a ton of sweets
          and I'd always enjoy eating them. I wanted to make my own so I asked 
          for her help and the rest is history.`,
      image: flo_intro,
    },
  ];

  return (
    <section className="intro">
      <div className="intro-subtitle">
        <hr />
        <h3>Introduction</h3>
        <hr />
      </div>
      <div className="intro-cards">
        {intros.map((person, index) => (
          <>
            <div key={index} className="intro-card">
              <h2>Somethin&apos; About {person.name}</h2>
              <img src={person.image} alt={`${person.name} image`} />
              <p>{person.text}</p>
            </div>
            <div key={index} className="intro-card-desktop">
              <img src={person.image} alt={`${person.name} image`} />
              <div className="card-text">
                <h2>Somethin&apos; About {person.name}</h2>
                <p>{person.text}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Introduction;
