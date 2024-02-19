import { IoCheckmark } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";

const tasks = [
  {
    title: "Update documentation",
    desc: "Dwuamish Head, Seattle, WA",
    time: "8:47 AM",
  },
  {
    title: "Make report",
    desc: "Dwuamish Head, Seattle, WA",
    time: "9:47 AM",
  },
  {
    title: "Add client",
    desc: "Dwuamish Head, Seattle, WA",
    time: "10:47 AM",
  },
  {
    title: "Call client",
    desc: "Dwuamish Head, Seattle, WA",
    time: "11:47 AM",
  },
  {
    title: "Update contacts",
    desc: "Dwuamish Head, Seattle, WA",
    time: "12:47 AM",
  },
  {
    title: "Send follow-up",
    desc: "Dwuamish Head, Seattle, WA",
    time: "13:47 AM",
  },
  {
    title: "Trainee onboarding",
    desc: "Dwuamish Head, Seattle, WA",
    time: "14:47 AM",
  },
];

const Tasks = () => {
  return (
    <section className="tasks">
      <h2 className="tasks-title">
        <span>Tasks (5)</span> | Today
      </h2>
      <ul className="tasks-list">
        {tasks.map(({ title, desc, time }) => (
          <li className="tasks-item" key={title}>
            <label className="tasks-checkbox">
              <input
                type="checkbox"
                className="tasks-input visually-hidden"
                name="task_status"
                value="unfinished"
              />
              <IoCheckmark
                className="tasks-checkbox-icon"
                width="20"
                height="20"
              />
            </label>
            <div className="tasks-info">
              <h3 className="tasks-heading">{title}</h3>
              <p className="tasks-desc">
                {desc}
                <time> {time}</time>
              </p>
            </div>
            <button className="tasks-btn">
              <MdOutlineSettings
                className="tasks-btn-icon"
                width="20"
                height="20"
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
