import "./ContentIntroduction.css";

const ContentIntroduction = ({ title, text }) => {
  return (
    <div>
      <div className="mb-8 font-karmina">
        <h2 className="text-h-lg">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContentIntroduction;
