import { gallery_image } from "../../assets";
import * as images from "../../assets";
import "./styles/Gallery.scss";

const Gallery = () => {
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

  const links = [
    {
      name: "Enzo",
      link: "#enzo",
    },
    {
      name: "Florence",
      link: "#florence",
    },
  ];

  return (
    <main className="gallery">
      <div>
        <img
          src={gallery_image}
          alt="gallery image"
          className="gallery-image"
        />
        <div className="overlay"></div>
        <h1 className="gallery-title">Gallery</h1>
      </div>
      <section className="bakers">
        <h2>Bakers</h2>
        <ul className="baker-list">
          {links.map((link, index) => (
            <>
              <li key={index}>
                <a href={link.link}>{link.name}</a>
              </li>
              <hr />
            </>
          ))}
        </ul>
      </section>
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
    </main>
  );
};

export default Gallery;
