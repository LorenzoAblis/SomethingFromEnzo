import { gallery_image } from "../../assets";

import "./styles/Gallery.scss";

import Bakers from "./Bakers";
import Enzo from "./Enzo";

const Gallery = () => {
  return (
    <main className="gallery-page">
      <div>
        <img
          src={gallery_image}
          alt="gallery image"
          className="gallery-image"
        />
        <div className="overlay"></div>
        <h1 className="gallery-title">Gallery</h1>
      </div>
      <Bakers />
      <Enzo />
    </main>
  );
};

export default Gallery;
