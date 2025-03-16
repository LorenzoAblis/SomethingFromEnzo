import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    navigate("/");
    scrollToTop();
  };

  return (
    <nav
      className={`${
        scroll
          ? "bg-primary shadow-[0_-5px_50px_rgba(0,0,0,0.5)] pt-0 py-5 xl:py-7"
          : ""
      }  w-full fixed top-0 left-0 z-[1000] transition-[0.35s] pt-5`}
    >
      <ul
        className={`${
          scroll
            ? "text-sm px-1 md:font-medium lg:text-md xl:text-lg"
            : "text-xs md:text-sm xl:text-lg"
        } flex items-center justify-center text-center text-text font-semibold`}
      >
        <div className="w-1/2 flex flex-row justify-around">
          {routes.slice(0, routes.length / 2).map((route, index) => (
            <li key={index}>
              <Link to={`/${route.route}`} onClick={scrollToTop}>
                {route.name}
              </Link>
            </li>
          ))}
        </div>
        <li className="px-3">
          <img
            src="/logo.webp"
            alt=""
            onClick={handleLogoClick}
            className={`${
              scroll
                ? "w-15 drop-shadow-[0_0_0.15rem_black] animate-rotate-logo md:w-20 md:absolute md:-translate-x-1/2 md:-translate-y-1/5"
                : "w-10 md:w-13 flex"
            } transition-[0.35s]`}
          />
        </li>
        <div className="w-1/2 flex flex-row justify-around">
          {routes.slice(routes.length / 2).map((route, index) => (
            <li key={index}>
              <Link to={`/${route.route}`} onClick={scrollToTop}>
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
