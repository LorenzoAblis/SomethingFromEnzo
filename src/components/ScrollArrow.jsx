import { useEffect, useState } from "react";

const ScrollArrow = ({ idName }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(idName);
  }, [idName]);

  const handleScroll = (dir) => {
    const scrollContainer = document.getElementById(id);
    if (!scrollContainer) return;

    if (dir === "l") {
      scrollContainer.scrollLeft -= 500;
    } else {
      scrollContainer.scrollLeft += 500;
    }
  };

  return (
    <span className="w-full flex flex-row justify-center gap-5 lg:hidden">
      <button
        className="w-1/3 text-primary border-2 border-accent rounded-2xl text-2xl"
        onClick={() => handleScroll("l")}
      >
        <i className="bi bi-chevron-double-left arrow"></i>
      </button>
      <button
        className="w-1/3 text-primary border-2 border-accent rounded-2xl text-2xl"
        onClick={() => handleScroll("r")}
      >
        <i className="bi bi-chevron-double-right arrow"></i>
      </button>
    </span>
  );
};

export default ScrollArrow;
