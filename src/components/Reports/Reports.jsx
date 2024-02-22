import { RxAvatar } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BsDash } from "react-icons/bs";

const reports = [
  {
    name: "Andrew Mike",
    progress: "89",
    status: "up",
  },
  {
    name: "Rostyslav",
    progress: "96",
    status: "dash",
  },
  {
    name: "John Doe",
    progress: "73",
    status: "down",
  },
  {
    name: "Jake Sullivan",
    progress: "65",
    status: "up",
  },
  {
    name: "Mila Mitchell",
    progress: "99",
    status: "dash",
  },
];

const Reports = () => {
  return (
    <section className="reports">
      <h2 className="reports-title">
        <span>Task Report</span> | Last 2 Weeks
      </h2>
      <ul className="reports-list">
        {reports.map(({ name, progress, status }) => (
          <li className="reports-item" key={name} data-status={status}>
            <div className="reports-staff staff">
              <RxAvatar className="staff-avatar" />

              <h3 className="staff-caption">{name}</h3>
            </div>
            <progress
              className="reports-bar"
              id="reports_indash"
              max="100"
              value={progress}
            >
              <div className="progress-bar">
                <span>Progress: {progress}%</span>
              </div>
            </progress>
            {status === "up" && <IoIosArrowUp className="reports-icon up" />}
            {status === "dash" && <BsDash className="reports-icon dash" />}
            {status === "down" && (
              <IoIosArrowDown className="reports-icon down" />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reports;
