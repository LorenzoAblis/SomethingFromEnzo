import SectionTitle from "../../components/SectionTitle.jsx";
import Handwriting from "../../assets/Handwriting.jsx";

const Landing = () => {
  return (
    <>
      <div className="handwriting-title">
        <img
          src="/home_image.webp"
          alt="home image"
          className="object-cover h-100"
        />
        <Handwriting />
        <div className="absolute inset-0 bg-black opacity-50 z-10 h-100"></div>
      </div>
      <section className="homemade hidden-on-desktop">
        <SectionTitle title="Homemade Deliciousness" subtitle="Welcome" />
        {/* <LazyLoadImage src={homemade} alt="homemade" /> */}
        <p>
          Welcome to Something From Enzo, where every creation is a labor of
          love. From meticulously designed cakes to whimsical cupcakes, each
          piece showcases my dedication to craftsmanship and passion for baking.
        </p>
      </section>
      <section className="homemade hidden-on-desktop">
        <SectionTitle title="Homemade Deliciousness" subtitle="Welcome" />
        {/* <LazyLoadImage src={homemade} alt="homemade" /> */}
        <p>
          Welcome to Something From Enzo, where every creation is a labor of
          love. From meticulously designed cakes to whimsical cupcakes, each
          piece showcases my dedication to craftsmanship and passion for baking.
        </p>
      </section>
      <section className="homemade hidden-on-desktop">
        <SectionTitle title="Homemade Deliciousness" subtitle="Welcome" />
        {/* <LazyLoadImage src={homemade} alt="homemade" /> */}
        <p>
          Welcome to Something From Enzo, where every creation is a labor of
          love. From meticulously designed cakes to whimsical cupcakes, each
          piece showcases my dedication to craftsmanship and passion for baking.
        </p>
      </section>
    </>
  );
};

export default Landing;
