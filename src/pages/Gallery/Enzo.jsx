import * as images from "../../assets";
import "./styles/Enzo.scss";

const Enzo = () => {
  const enzo = [
    {
      name: "Redvelvet Cheese Cake",
      images: ["redvelvet", "redvelvet2", "redvelvet3"],
    },
    {
      name: "Almond Opera Cake",
      images: ["opera", "opera3", "opera2"],
    },
    {
      name: "Chocolate Macarons",
      images: ["macarons", "gallery_image"],
    },
    {
      name: "Chocolate Drip Cake",
      images: ["chocolate", "chocolate2"],
    },
    {
      name: "French Croissants",
      images: ["croissants", "homemade"],
    },
    {
      name: "Chocolate Élciars",
      images: ["eclairs"],
    },
  ];

  return (
    <section className="enzo" id="enzo">
      <div className="enzo-subtitle">
        <hr />
        <h3>Confectionary</h3>
        <hr />
      </div>
      <h2>Made by Enzo</h2>
      <h5>( Sideways Scroll )</h5>
      <div className="enzo-gallery">
        {enzo.map((item, index) => (
          <div className="item-card" key={index}>
            <div className="image-container">
              {item.images.map((image, index) => (
                <img
                  key={index}
                  src={images[image]}
                  alt={item.name}
                  className="item-img"
                />
              ))}
            </div>
            <h4 className="item-title">{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Enzo;
