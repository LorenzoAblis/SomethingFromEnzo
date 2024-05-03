import { gallery_image } from "../../assets";

import "./styles/Gallery.scss";

import PageTitle from "../../components/PageTitle";
import Bakers from "./Bakers";
import Enzo from "./Enzo";

const Gallery = () => {
  return (
    <main className="gallery-page">
      <PageTitle title="Gallery" img={gallery_image} />
      <Bakers />
      <Enzo />
    </main>
  );
};

export default Gallery;
