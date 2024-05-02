import PropTypes from "prop-types";

const PageTitle = ({ title, img }) => {
  return (
    <header>
      <img src={img.default} alt={`${title} image`} />
      <div className="overlay"></div>
      <h1>{title}</h1>
    </header>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
};

export default PageTitle;
