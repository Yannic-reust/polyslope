import "./ContentIntroduction.css";
import PropTypes from "prop-types";

const ContentIntroduction = ({ title, text }) => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-h-lg font-karmina">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

ContentIntroduction.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ContentIntroduction;
