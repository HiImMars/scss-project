import { GoPlus } from "react-icons/go";

const Welcome = () => {
  return (
    <section className="welcome">
      <h1 className="welcome-title">Hello User</h1>
      <p className="welcome-text">Welcome into GhostCRM Dashboard</p>
      <button>
        <GoPlus className="welcome-btn" />
        Primary normal
      </button>
    </section>
  );
};

export default Welcome;
