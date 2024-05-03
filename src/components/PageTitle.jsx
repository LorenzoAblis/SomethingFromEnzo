import PropTypes from "prop-types";
import "./styles/PageTitle.scss";

const PageTitle = ({ title, img }) => {
  return (
    <div className="page-title-container">
      <img src={img} alt={`${title} image`} />
      <div className="overlay"></div>
      <h1>{title}</h1>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default PageTitle;
