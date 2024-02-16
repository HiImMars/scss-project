import { GoPlus } from "react-icons/go";

const Welcome = () => {
  return (
    <section className="welcome">
      <h1 className="page-title">
        Hello User,{" "}
        <span className="page-title-accent">
          Welcome into GhostCRM Dashboard
        </span>
      </h1>
      <button className="welcome-btn btn btn--primary" type="button">
        <GoPlus className="welcome-btn-icon btn-icon" />
        <span className="btn-inner">Primary normal</span>
      </button>
    </section>
  );
};

export default Welcome;
