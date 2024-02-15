import { RxAvatar } from "react-icons/rx";

const reports = [
  {
    name: "Andrew Mike",
    progress: "89",
  },
  {
    name: "Rostyslav Fedorenko",
    progress: "96",
  },
  {
    name: "John Doe",
    progress: "73",
  },
  {
    name: "Jake Sullivan",
    progress: "65",
  },
  {
    name: "Mila Mitchell",
    progress: "99",
  },
];

const Reports = () => {
  return (
    <section className="reports">
      <h2 className="reports-title">
        <span>Task Report</span> | Last 2 Weeks
      </h2>
      <ul className="reports-list">
        {reports.map(({ name, progress }) => (
          <li className="reports-item" key={name}>
            <div className="reports-co-worker co-worker">
              <div className="co-worker-thumb">
                <RxAvatar className="co-worker-avatar" width="32" height="32" />
              </div>
              <h3 className="co-worker-caption">{name}</h3>
            </div>
            <progress
              className="reports-bar"
              id="reports_ibnu"
              max="100"
              value={progress}
            >
              <div className="progress-bar">
                <span>Progress: {progress}%</span>
              </div>
            </progress>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reports;
