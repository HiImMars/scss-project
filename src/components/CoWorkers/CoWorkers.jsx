import { RxAvatar } from "react-icons/rx";
import { IoIosRefresh } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

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
  {
    name: "Milko Voiko",
    position: "Engineer",
    year: "2018",
  },
  {
    name: "Jason Born",
    position: "Head of Happiness",
    year: "2020",
  },
];

const CoWorkers = () => {
  return (
    <section className="co-workers">
      <div className="co-workers-wrapper">
        <h2 className="co-workers-title">
          <span>Co-workers</span> | Marketing department
        </h2>
        <div className="co-workers-container">
          {/* Details for mobile version */}
          {employees.map(({ name, position, year }) => (
            <details className="co-workers-details" key={name}>
              <summary className="co-workers-data">
                <div className="details-left">
                  <IoIosArrowDown className="co-workers-icon" />

                  <div className="co-workers-bio">
                    <RxAvatar className="thumb" />

                    <p className="co-workers-caption">{name}</p>
                  </div>
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
                    <RxAvatar className="thumb" />
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
      </div>
      {/* Board */}
      <ul className="co-workers-board board">
        <li className="board-item">
          <div className="board-left">
            <h3 className="board-caption">Sent benefit review by Sunday</h3>
            <p className="board-details">
              Due date: <time>December 23, 2023</time>
            </p>
            <div className="board-coworker person">
              <div className="person-thumb">
                <RxAvatar className="person-avatar" width="42" height="63" />
              </div>
              <p className="person-caption">George Fields</p>
            </div>
          </div>
          <div className="board-right">
            <p className="board-tag">Warning</p>
            <p className="badge-warning">Ending soon</p>
          </div>
        </li>
        <li className="board-item">
          <div className="board-left">
            <h3 className="board-caption">Call client</h3>
            <p className="board-details">
              Due date: <time>December 20, 2023</time>
            </p>
            <div className="board-coworker person">
              <div className="person-thumb">
                <RxAvatar className="person-avatar" width="42" height="63" />
              </div>
              <p className="person-caption">George Fields</p>
            </div>
          </div>
          <div className="board-right">
            <p className="board-tag">Call</p>
            <p className="badge-danger">Ended</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default CoWorkers;
