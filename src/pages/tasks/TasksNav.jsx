import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TasksBodyContext } from "../../context/TasksBodyContext";
import { TaskContext } from "../../context/TaskContext";

const TasksNav = () => {
  const {
    allIsActive,
    allTabHandler,
    reminderTabHandler,
    reminderIsActive,
    completedIsActive,
    completedTabHandler,
  } = useContext(TasksBodyContext);

  const { tasksData, reminderTasks, completedTasks } = useContext(TaskContext);

  return (
    <div className="card-header">
      <ul className="nav nav-tabs card-header-tabs">
        {/* All */}
        <li className="nav-item">
          <Link
            onClick={() => {
              allTabHandler();
            }}
            className={`nav-link ${
              allIsActive ? "active" : "j-text-secondary"
            }`}
            aria-current={allIsActive}
            to="#"
          >
            All
            <span className="badge j-text-secondary mx-1">
              {tasksData?.length}
            </span>
          </Link>
        </li>
        {/* Reminder */}
        <li className="nav-item">
          <Link
            onClick={() => {
              reminderTabHandler();
            }}
            className={`nav-link ${
              reminderIsActive ? "active" : "j-text-secondary"
            }`}
            aria-current={reminderIsActive}
            to="#"
          >
            Reminders
            <span className="badge j-text-secondary mx-1">
              {reminderTasks?.length}
            </span>
          </Link>
        </li>
        {/* Completed */}
        <li className="nav-item">
          <Link
            onClick={() => {
              completedTabHandler();
            }}
            className={`nav-link ${
              completedIsActive ? "active" : "j-text-secondary"
            }`}
            aria-current={completedIsActive}
            to="#"
          >
            Completed
            <span className="badge j-text-secondary mx-1">
              {completedTasks?.length}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TasksNav;
