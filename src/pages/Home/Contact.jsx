import { logo } from "../../assets/index.js";
import "./styles/Contact.scss";

const Contact = () => {
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

  return (
    <section className="contact">
      <p>Crafting delicious memories, one bite at a time.</p>
      <div>
        <img src={logo} alt="logo" />
        <div>
          <hr />
          <h3>Questions?</h3>
          <hr />
        </div>
        <h2>lablis228609@gmail.com</h2>
      </div>
      <ul>
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
