import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./styles/ScrollArrow.scss";

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
    <span className="arrow-scroll">
      <button className="arrow-btn" onClick={() => handleScroll("l")}>
        <i className="bi bi-chevron-double-left arrow"></i>
      </button>
      <button className="arrow-btn" onClick={() => handleScroll("r")}>
        <i className="bi bi-chevron-double-right arrow"></i>
      </button>
    </span>
  );
};

ScrollArrow.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ScrollArrow;
