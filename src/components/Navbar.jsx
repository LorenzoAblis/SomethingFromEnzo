import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./styles/Navbar.scss";
import logo from "../assets/icons/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const routes = [
    {
      name: "Gallery",
      route: "gallery",
    },
    {
      name: "Contact",
      route: "contact",
    },
    {
      name: "FAQ",
      route: "faq",
    },
    {
      name: "About",
      route: "about",
    },
  ];

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogoClick = () => {
    navigate("/SomethingFromEnzo/#");
    scrollToTop();
  };

  return (
    <nav className={`${scroll ? "sticky" : ""}`}>
      <ul>
        <div>
          {routes.slice(0, routes.length / 2).map((route, index) => (
            <li key={index}>
              <Link
                to={`/SomethingFromEnzo/${route.route}`}
                onClick={scrollToTop}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </div>
        <li className="logo">
          <img src={logo} alt="" onClick={handleLogoClick} />
        </li>
        <div>
          {routes.slice(routes.length / 2).map((route, index) => (
            <li key={index}>
              <Link
                to={`/SomethingFromEnzo/${route.route}`}
                onClick={scrollToTop}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
