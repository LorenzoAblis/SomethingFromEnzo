import ScrollArrow from "../../components/ScrollArrow.jsx";
import SectionTitle from "../../components/SectionTitle.jsx";

const aboutUs = [
  {
    date: "1977",
    text: "My grandma rocked the baking scene in the Philippines, kicking off her cake-selling gig and even opening her own cozy cake shop.",
    image: "/family/1977.webp",
  },
  {
    date: "2013",
    text: "When our family moved to America, my mom decided to sell cakes just like my grandma.",
    image: "/family/2013.webp",
  },
  {
    date: "2018",
    text: "I tried my hand at baking for the first time, but let's just say it wasn't pretty. Baking wasn't exactly my forte at that point.",
    image: "/family/2018.webp",
  },
  {
    date: "2022",
    text: "I got back into the kitchen. Turns out, baking was actually extremely enjoyable and stress-free. Baking became my happy place where I continue to make cakes/pasteries.",
    image: "/cakes/chocolate.webp",
  },
];

const History = () => {
  return (
    <section className="mt-20 bg-secondary pt-10 relative" id="history">
      <SectionTitle
        title="How did it start?"
        subtitle="About Us"
        titleColor="text-white"
        subtitleColor="text-accent"
      />
      <div
        id="history-scroll"
        className="mt-10 text-center flex flex-row overflow-x-scroll snap-x snap-mandatory space-x-5 no-scrollbar scroll-smooth"
      >
        {aboutUs.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-full snap-start md:min-w-1/2 m-0 lg:min-w-1/4"
          >
            <h4 className="text-4xl font-bold text-primary m-0">{item.date}</h4>
            <p className="text-white mt-3 w-3/4 m-0 h-1/6 lg:text-sm xl:text-lg">
              {item.text}
            </p>
            <img
              src={item.image}
              alt={item.image}
              className="mt-10 w-4/5 rounded-3xl h-1/2 object-cover lg:mt-20"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 w-full">
        <ScrollArrow idName="history-scroll" />
      </div>
    </section>
  );
};

export default History;
