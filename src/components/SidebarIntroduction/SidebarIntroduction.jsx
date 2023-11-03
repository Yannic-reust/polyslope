import "./sidebarIntroduction.css";

const sidebarIntroduction = ({ title, text }) => {
  return (
    <div>
      <div className="p-8">
        <h2 className="text-3xl">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default sidebarIntroduction;
