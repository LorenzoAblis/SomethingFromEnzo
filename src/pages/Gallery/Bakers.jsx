import "./styles/Bakers.scss";

const Bakers = () => {
  const links = [
    {
      name: "Enzo",
      link: "#enzo",
    },
    {
      name: "Florence",
      link: "#florence",
    },
  ];

  return (
    <section className="bakers">
      <h2>Bakers</h2>
      <ul className="baker-list">
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

export default Bakers;
