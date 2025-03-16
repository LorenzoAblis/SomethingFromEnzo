import ScrollArrow from "../../components/ScrollArrow.jsx";
import SectionTitle from "../../components/SectionTitle.jsx";

const products = [
  {
    name: "Cakes",
    text: "We primarily make cakes and have been doing so since the start.",
    image: "/icons/Cake.svg",
  },
  {
    name: "Baked Goods",
    text: "We also make bread, cookies, and other goodies to compliment our cakes.",
    image: "/icons/Muffin.svg",
  },
  {
    name: "French Cuisine",
    text: "Recently, I've been experimenting with French pastries and I've been loving it.",
    image: "/icons/Croissant.svg",
  },
];
const Products = () => {
  return (
    <section className="mt-20" id="products">
      <SectionTitle title="What do we make?" subtitle="Sweets" />
      <div
        id="product-scroll"
        className="mt-10 text-center flex flex-row overflow-x-scroll snap-x snap-mandatory space-x-5 no-scrollbar scroll-smooth md:flex-row md:flex-wrap md:justify-center md:gap-5"
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-full snap-start md:min-w-5/11 lg:min-w-4/16"
          >
            <div className="flex justify-center bg-[rgba(97,186,177,0.2)] rounded-full w-2/5 md:w-32 md:h-32 xl:w-48 xl:h-48">
              <img
                src={item.image}
                alt={item.image}
                loading="lazy"
                className="w-full h-1/2 m-auto md:w-16 md:h-16 xl:h-24 xl:w-24"
              />
            </div>
            <h4 className="mt-10 text-3xl text-primary font-bold">
              {item.name}
            </h4>
            <p className="mt-2 text-md w-80 mb-5 xl:text-lg">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <ScrollArrow idName="product-scroll" />
      </div>
    </section>
  );
};

export default Products;
