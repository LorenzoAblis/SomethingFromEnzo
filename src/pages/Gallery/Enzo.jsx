import * as images from "../../assets/cakes/enzo";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./styles/Enzo.scss";
import SectionTitle from "../../components/SectionTitle";

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
    {
      name: "Buttercream Flower Cake",
      images: ["momday", "momday2", "momday3", "momday4"],
    },
  ];

  return (
    <section className="enzo" id="enzo">
      <SectionTitle title="Made by Enzo" subtitle="Confectionary" />
      <h5>( Sideways Scroll )</h5>
      <div className="enzo-gallery">
        {enzo.map((item, index) => (
          <div className="item-card" key={index}>
            <div className="image-container">
              {item.images.map((image, index) => (
                <LazyLoadImage
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
