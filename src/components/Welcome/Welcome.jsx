import { GoPlus } from "react-icons/go";

const Welcome = () => {
  return (
    <section className="welcome">
      <h1 className="page-title">
        <span className="page-title-accent">Hello User,</span>
        Welcome into GhostCRM Dashboard
      </h1>
      <button className="welcome-btn btn btn--primary" type="button">
        <GoPlus className="welcome-btn-icon btn-icon" />
        <span className="btn-inner">Primary normal</span>
      </button>
    </section>
  );
};

export default Welcome;
