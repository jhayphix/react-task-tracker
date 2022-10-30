import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext.jsx";
import { Link } from "react-router-dom";

const TaskItem = ({ task }) => {
  const { removeTaskHandler, getTasks } = useContext(TaskContext);
  const [reminderValue, setReminderValue] = useState(!task.reminder);
  const [isCompleted, setIsCompleted] = useState(!task.completed);

  const removeHandler = (id) => {
    removeTaskHandler(id);
  };

  // Add reminder
  const onDoubleClickHandler = () => {
    const updateData = async () => {
      await fetch(`http://localhost:8000/tasks/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...task, reminder: reminderValue }),
      });

      getTasks();
    };
    updateData();
  };

  // Completed
  const onCompletedHandler = () => {
    const updateData = async () => {
      await fetch(`http://localhost:8000/tasks/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...task, completed: isCompleted }),
      });

      getTasks();
    };
    updateData();
  };

  return (
    <li
      onDoubleClick={() => {
        setReminderValue((prev) => !prev);
        onDoubleClickHandler();
      }}
      className={` ${
        task.reminder ? "task-item-reminder" : ""
      } task-item list-group-item ms-1 mb-3 d-flex justify-content-between align-items-center`}
    >
      <div
        className="d-flex align-items-center"
        style={{ position: "relative" }}
      >
        <input
          className="form-check-input me-3"
          type="checkbox"
          value={task.completed}
          onChange={() => {
            setIsCompleted((prev) => !prev);
            onCompletedHandler();
          }}
          checked={task.completed ? true : false}
        />

        {/* ________________ */}
        <div className="pe-2 text-start">
          <div className="lead d-inline-block text-truncate task-item-text-truncate">
            {task.task}
          </div>
          <div className="text-muted text-start" style={{ userSelect: "none" }}>
            {task.date} | {task.time}
          </div>
        </div>
      </div>

      {/* Hide on large */}
      <Link
        to={`/update-task/${task.id}`}
        className="d-sm-none d-inline-block stretched-link"
      ></Link>

      {/* ___________ */}
      <div className="d-flex align-items-center">
        {/* Hide on small */}
        <Link
          to={`/update-task/${task.id}`}
          className="me-4 pt-1 d-sm-inline-block d-none"
        >
          <i className="bi bi-info-circle j-text-secondary"></i>
        </Link>
        <div
          className="remove-task-btn text-danger px-2 user-select-none"
          type="button"
          onClick={() => {
            removeHandler(task.id);
          }}
        >
          x
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
