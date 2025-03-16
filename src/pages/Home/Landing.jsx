import SectionTitle from "../../components/SectionTitle.jsx";
import Handwriting from "../../assets/Handwriting.jsx";

const Landing = () => {
  return (
    <>
      <div className="lg:h-svh" id="home">
        <div className="relative">
          <img
            src="/cakes/home_image.webp"
            alt="home image"
            className="object-cover h-100 w-full md:h-full lg:h-svh"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <Handwriting />
      </div>
      <section className="mt-10 flex flex-col items-center md:hidden">
        <SectionTitle title="Homemade Deliciousness" subtitle="Welcome" />
        <img
          src="/cakes/homemade.webp"
          alt="homemade"
          className="object-cover w-3/4 rounded-3xl mt-5 shadow-[0.75rem_0.75rem_0rem_var(--color-secondary)]"
          loading="lazy"
        />
        <p className="text-center mt-10 w-5/6">
          Welcome to Something From Enzo, where every creation is a labor of
          love. From meticulously designed cakes to whimsical cupcakes, each
          piece showcases my dedication to craftsmanship and passion for baking.
        </p>
      </section>
      <section className="mt-10 hidden flex-row items-center md:flex px-5 gap-10 justify-center">
        <img
          src="/cakes/homemade.webp"
          alt="homemade"
          className="object-cover w-1/2 rounded-3xl mt-5 shadow-[0.75rem_0.75rem_0rem_var(--color-secondary)] xl:w-2/5"
          loading="lazy"
        />
        <div className="flex flex-col text-center items-center xl:w-1/2">
          <SectionTitle title="Homemade Deliciousness" subtitle="Welcome" />
          <p className="text-center mt-10 w-5/6 xl:text-lg">
            Welcome to Something From Enzo, where every creation is a labor of
            love. From meticulously designed cakes to whimsical cupcakes, each
            piece showcases my dedication to craftsmanship and passion for
            baking.
          </p>
        </div>
      </section>
    </>
  );
};

export default Landing;
