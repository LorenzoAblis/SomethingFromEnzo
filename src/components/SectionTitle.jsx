import PropTypes from "prop-types";
import "./styles/SectionTitle.scss";

const SectionTitle = ({ title, subtitle, className }) => {
  return (
    <div className={`section-header ${className}`}>
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
  className: PropTypes.string,
};

export default SectionTitle;
