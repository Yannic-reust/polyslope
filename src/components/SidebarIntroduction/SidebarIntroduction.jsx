import "./sidebarIntroduction.css";

const sidebarIntroduction = ({ title, text }) => {
  return (
    <div>
      <div className="p-8 font-karmina">
        <p className="text-h-md">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default sidebarIntroduction;
