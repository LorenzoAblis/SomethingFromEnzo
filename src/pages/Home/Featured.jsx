import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle.jsx";

const featured = [
  {
    title: "Red Velvet Cake",
    baker: "Enzo Ablis",
    image: "/cakes/redvelvet.webp",
  },
  {
    title: "Fondant Lemon Cake",
    baker: "Florence Ablis",
    image: "/cakes/lemon.webp",
  },
  {
    title: "Chocolate Macarons",
    baker: "Enzo Ablis",
    image: "/cakes/macarons.webp",
  },
];

const Featured = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-20 flex flex-col items-center" id="featured">
      <SectionTitle title="Sweet Perfection" subtitle="Featured" />
      <div className="flex flex-col text-center mt-10 gap-10 md:flex-row md:flex-wrap md:justify-center">
        {featured.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:w-5/11 xl:w-5/16"
          >
            <img
              src={item.image}
              alt={item.image}
              className="w-5/6 rounded-3xl shadow-[0.75rem_0.75rem_0rem_var(--color-primary)]"
            />
            <h4 className="mt-10 font-bold text-xl text-secondary xl:text-2xl">
              {item.title}
            </h4>
            <p className="text-lg">{item.baker}</p>
          </div>
        ))}
      </div>
      <Link
        to="/gallery"
        onClick={scrollToTop}
        className="mt-10 font-semibold text-lg text-primary p-3 border-4 border-primary"
      >
        View All Creations
      </Link>
    </section>
  );
};

export default Featured;
