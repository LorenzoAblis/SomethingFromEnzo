import PropTypes from "prop-types";
import "./styles/SectionTitle.scss";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-header">
      <div className="section-subtitle">
        <hr />
        <h3>{subtitle}</h3>
        <hr />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default SectionTitle;
