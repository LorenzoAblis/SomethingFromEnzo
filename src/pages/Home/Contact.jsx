const links = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Featured",
    link: "#featured",
  },
  {
    name: "History",
    link: "#history",
  },
  {
    name: "Products",
    link: "#products",
  },
];

const Contact = () => {
  const handleAnchorClick = (e) => {
    const href = e.currentTarget.getAttribute("href");

    if (href.startsWith("#")) {
      e.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="flex flex-col items-center text-center mt-20 w-full lg:flex-row lg:px-10 lg:gap-10">
      <p className="font-dancing-script text-4xl w-5/6 text-secondary font-medium md:text-5xl md:w-3/4 lg:text-4xl xl:text-5xl">
        Crafting delicious memories, one bite at a time.
      </p>
      <div className="flex flex-col items-center mt-15 w-7/8 md:w-1/2">
        <div className="relative bg-primary p-2 rounded-full">
          <img
            src="/logo.webp"
            alt="logo"
            className="w-32 h-32 object-cover rounded-full"
            loading="lazy"
          />
        </div>
        <div className="w-full mt-15 flex justify-center items-center gap-2">
          <hr className="w-full h-1 bg-accent border-0" />
          <h3 className="text-5xl font-dancing-script text-primary font-medium">
            Questions?
          </h3>
          <hr className="w-full h-1 bg-accent border-0" />
        </div>
        <h2 className="mt-5 font-bold text-xl text-secondary">
          lablis228609@gmail.com
        </h2>
      </div>
      <ul className="flex flex-col w-full mt-10 px-5 md:w-5/7">
        {links.map((link, index) => (
          <>
            <li
              key={index}
              className="w-full p-4 hover:bg-primary hover:text-white"
            >
              <a
                href={link.link}
                onClick={handleAnchorClick}
                className="block text-start text-lg text-secondary hover:text-white"
              >
                {link.name}
              </a>
            </li>
            <hr className="m-auto w-full h-1 bg-primary border-0" />
          </>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
