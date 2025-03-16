import { Link } from "react-router-dom";

const socials = [
  {
    link: "https://www.instagram.com/enzo.ablis?igsh=MW1hdDVrMHk5ZWF5YQ%3D%3D&utm_source=qr",
    image: "instagram.svg",
  },
  {
    link: "https://snapchat.com/t/CMLzZaSD",
    image: "snapchat.svg",
  },
  {
    link: "https://m.facebook.com/people/Somethin-From-Enzo/100035642605919/",
    image: "facebook.svg",
  },
  {
    link: "mailto:lablis228609@gmail.com",
    image: "google.svg",
  },
];

const sitemap = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Gallery",
    link: "gallery",
  },
  {
    name: "Contact",
    link: "contact",
  },
  {
    name: "FAQ",
    link: "faq",
  },
  {
    name: "About",
    link: "about",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 flex flex-col items-center w-full bg-secondary py-10 text-white">
      <section className="flex flex-col items-center w-1/2 md:flex-row md:justify-between md:w-full md:px-10">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/logo.webp"
            alt="logo"
            loading="lazy"
            className="w-1/2 md:w-1/4"
          />
          <div className="w-full mt-5 flex flex-col gap-3">
            <h2 className="font-dancing-script text-4xl xl:text-5xl">
              Contact Info
            </h2>
            <p className="text-gray-300">lablis228609@gmail.com</p>
            <p className="text-gray-300">+1 224-518-9906</p>
          </div>
        </div>
        <div className="w-full mt-5 flex flex-col gap-3 md:mt-0 md:m-auto xl:px-20">
          <h2 className="font-dancing-script text-4xl xl:text-5xl">Site Map</h2>
          <ul>
            {sitemap.map((site, index) => (
              <li key={index} className="text-gray-300">
                <Link to={`/${site.link}`} onClick={scrollToTop}>
                  {site.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-5 md:w-4/9  md:mt-0 md:m-auto">
          <h2 className="font-dancing-script text-4xl xl:text-5xl">Socials</h2>
          <ul className="flex flex-row gap-2 mt-2">
            {socials.map((social, index) => (
              <li key={index}>
                <a href={social.link} target="_blank">
                  <img
                    src={`/icons/${social.image}`}
                    alt={social.image}
                    className="xl:w-4/6"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <p className="mt-3 md:mt-5">Website by Lorenzo Ablis</p>
      <p className="mt-3 text-center">
        &copy; 2024 Something From Enzo. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
