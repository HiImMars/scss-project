import CoWorkers from "../components/CoWorkers/CoWorkers";
import Reports from "../components/Reports/Reports";
import Tasks from "../components/Tasks/Tasks";
import Welcome from "../components/Welcome/Welcome";

const Homepage = () => {
  return (
    <>
      <Welcome />
      <CoWorkers />
      <Tasks />
      <Reports />
    </>
  );
};

export default Homepage;
