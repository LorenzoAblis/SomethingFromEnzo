import * as images from "../assets";
import { Link } from "react-router-dom";

import "./styles/Footer.scss";

const Footer = () => {
  const socials = [
    {
      link: "https://www.instagram.com/enzo.ablis?igsh=MW1hdDVrMHk5ZWF5YQ%3D%3D&utm_source=qr",
      image: "instagram",
    },
    {
      link: "https://snapchat.com/t/CMLzZaSD",
      image: "snapchat",
    },
    {
      link: "https://m.facebook.com/people/Somethin-From-Enzo/100035642605919/",
      image: "facebook",
    },
    {
      link: "mailto:lablis228609@gmail.com",
      image: "google",
    },
  ];

  const sitemap = [
    {
      name: "Gallery",
      link: "",
    },
    {
      name: "Contact",
      link: "",
    },
    {
      name: "FAQ",
      link: "",
    },
    {
      name: "About",
      link: "",
    },
  ];

  return (
    <footer>
      <section>
        <div className="contact">
          <img src={images["logo"]} alt="logo" />
          <h2>Contact Info</h2>
          <p>lablis228609@gmail.com</p>
          <p>+1 224-518-9906</p>
        </div>
        <div className="site-map">
          <h2>Site Map</h2>
          <ul>
            {sitemap.map((site, index) => (
              <li key={index}>
                <Link to="/SomethingFromEnzo">{site.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="socials">
          <h2>Socials</h2>
          <ul>
            {socials.map((social, index) => (
              <li key={index}>
                <a href={social.link} target="_blank">
                  <img src={images[social.image]} alt={social.image} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
