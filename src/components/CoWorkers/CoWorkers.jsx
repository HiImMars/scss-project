import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import { IoIosRefresh } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const employees = [
  {
    name: "Andrew Mike",
    position: "Developer",
    year: "2017",
  },
  {
    name: "Rostyslav Fedorenko",
    position: "Manager",
    year: "2016",
  },
  {
    name: "John Doe",
    position: "Engineer",
    year: "2014",
  },
  {
    name: "Jake Sullivan",
    position: "Senior Developer",
    year: "2013",
  },
  {
    name: "Mila Mitchell",
    position: "Researcher",
    year: "2019",
  },
];

const CoWorkers = () => {
  return (
    <section className="co-workers">
      <div className="co-workers-wrapper">
        <h2 className="co-workers-title">
          <span>Co-workers</span>| Marketing department
        </h2>
        <div className="co-workers-container">
          {/* Details for mobile version */}
          {employees.map(({ name, position, year }) => (
            <details className="co-workers-details" key={name}>
              <summary className="co-workers-data">
                <GoPlus className="co-worker-icon plus" />
                <LuMinus className="co-worker-icon minus" />
                <div className="co-workers-bio">
                  <div className="thumb">
                    <RxAvatar />
                  </div>
                  <p className="co-workers-caption">{name}</p>
                </div>
                <div className="co-workers-controls">
                  <button type="button" className="controls-btn">
                    <IoIosRefresh className="controls-btn-icon success" />
                  </button>
                  <button type="button" className="controls-btn">
                    <IoCloseOutline className="controls-btn-icon close" />
                  </button>
                </div>
              </summary>
              <div className="co-workers-info">
                <h3 className="co-workers-position">Job position</h3>
                <p>{position}</p>
                <h3 className="co-workers-accept">Since</h3>
                <p>{year}</p>
              </div>
            </details>
          ))}
        </div>
        {/* Table of employees for desktop */}
        <table className="co-workers-table">
          <caption className="visually-hidden"></caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job position</th>
              <th>Since</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(({ name, position, year }) => (
              <tr key={name}>
                <td>
                  <div className="thumb">
                    <RxAvatar />
                  </div>
                </td>
                <td>{name}</td>
                <td>{position}</td>
                <td>{year}</td>
                <td>
                  <div className="co-workers-controls">
                    <button className="controls-btn">
                      <IoIosRefresh className="controls-btn-icon success" />
                    </button>
                    <button className="controls-btn">
                      <IoCloseOutline className="controls-btn-icon close" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CoWorkers;
