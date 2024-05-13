import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import anime from "animejs";

import { logo } from "../../assets/index.js";
import "./styles/Contact.scss";

const Contact = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const [contactAnimated, setProductsAnimated] = useState(false);

  const links = [
    {
      name: "Home",
      link: "#",
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

  useEffect(() => {
    if (myElementIsVisible && !contactAnimated) {
      anime({
        targets: ".email img",
        translateY: [-200, 0],
        opacity: [0, 1],
        rotate: {
          value: 360,
          duration: 1800,
          easing: "spring(5, 100, 30, 1)",
        },
      });

      anime({
        targets: `.contact .slogan`,
        translateY: [-400, 0],
        color: ["#fe7a98", "#7a4b3b"],
        opacity: [0, 1],
        scale: [2, 1],
        easing: "spring(1, 100, 10, 0)",
        delay: 2250,
      });

      anime({
        targets: `.contact .questions hr`,
        width: [0, 100],
        delay: 1500,
        opacity: [0, 1],
        fontSize: ["0.5rem", "1.35rem"],
        easing: "spring(1, 100, 10, 0)",
      });

      anime({
        targets: `.contact .questions h3, .contact .email h2`,
        delay: 1500,
        duration: 2000,
        opacity: [0, 1],
        scale: [0, 1],
        easing: "easeInOutExpo",
      });

      links.forEach((item, index) => {
        anime({
          targets: `.page-map li:nth-child(${index + 1}), .page-map hr`,
          translateX: [200, 0],
          opacity: [0, 1],
          delay: index * 500,
          easing: "easeInOutExpo",
        });
        anime({
          targets: `.page-map li:nth-child(${index + 4}), .page-map hr`,
          translateX: [-200, 0],
          opacity: [0, 1],
          delay: index * 500,
          easing: "easeInOutExpo",
        });
      });

      setProductsAnimated(true);
    }
  }, [myElementIsVisible, contactAnimated, links]);

  return (
    <section className="contact">
      <p className="slogan">Crafting delicious memories, one bite at a time.</p>
      <div className="email">
        <LazyLoadImage src={logo} alt="logo" />
        <div className="questions">
          <hr />
          <h3>Questions?</h3>
          <hr />
        </div>
        <h2 ref={myRef}>lablis228609@gmail.com</h2>
      </div>
      <ul className="page-map">
        {links.map((link, index) => (
          <>
            <li key={index}>
              <a href={link.link}>{link.name}</a>
            </li>
            <hr />
          </>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
