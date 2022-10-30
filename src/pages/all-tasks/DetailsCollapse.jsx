import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import DetailCollapseCard from "./DetailCollapseCard";

const DetailsCollapse = ({ type, collapse, showCloseBtn }) => {
  const { tasksData, reminderTasks, completedTasks } = useContext(TaskContext);
  const all = {
    name: "All",
    icon: "bi bi-folder",
    number: tasksData?.length,
  };

  const completed = {
    name: "Completed",
    icon: "bi bi-check",
    number: completedTasks?.length,
  };
  const reminder = {
    name: "Reminder",
    icon: "bi bi-flag",
    number: reminderTasks?.length,
  };
  const schedule = {
    name: "Schedule",
    icon: "bi bi-list",
    number: tasksData?.length,
  };

  return (
    <div
      className={type}
      id={collapse ? "tasksDetailsCollapse" : ""}
    >
      <div className="card card-body mb-4 j-bg-dark ">
        <div className="row gy-sm-4 gy-2 row-cols-2  ">
          <DetailCollapseCard holder={all} />
          <DetailCollapseCard holder={completed} />
          <DetailCollapseCard holder={reminder} />
          <DetailCollapseCard holder={schedule} />
        </div>
      </div>
      {showCloseBtn ? (
        <button
          type="button"
          className="btn-close btn-close-white"
          aria-label="Close"
          data-bs-toggle="collapse"
          aria-expanded="false"
          data-bs-target="#tasksDetailsCollapse"
          aria-controls="tasksDetailsCollapse"
        ></button>
      ) : (
        ""
      )}
    </div>
  );
};

DetailsCollapse.defaultProps = {
  type: "collapse",
  collapse: true,
  showCloseBtn: true,
};

export default DetailsCollapse;
