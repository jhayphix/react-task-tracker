import { Link } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const Dropdown = ({ className }) => {
  const { tasksData } = useContext(TaskContext);
  const { setCollapseIsShowing } = useContext(TaskContext);

  return (
    <div className={`btn-group ${className}`}>
      <Link to="/tasks" className="btn j-btn-outline-secondary">
        Tasks{" "}
        <span className="badge text-light bg-danger">
          {" "}
          {tasksData?.length}{" "}
        </span>
      </Link>
      <button
        onClick={() => {
          setCollapseIsShowing((prev) => !prev);
        }}
        type="button"
        className="btn j-btn-outline-secondary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="collapse"
        aria-expanded="false"
        data-bs-target="#tasksDetailsCollapse"
        aria-controls="tasksDetailsCollapse"
      >
        {/* in */}
      </button>
    </div>
  );
};

export default Dropdown;
