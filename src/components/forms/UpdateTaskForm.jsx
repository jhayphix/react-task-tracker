import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";

const UpdateTaskForm = ({ taskData, setTaskData }) => {
  const navigate = useNavigate();
  const { updateTaskHandler } = useContext(TaskContext);

  const onUpdateHandler = () => {
    updateTaskHandler(taskData);
    navigate("/");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onUpdateHandler();
      }}
    >
      <div className="form-container mt-5 mb-4">
        <div className="form-floating mb-5">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Task"
            onChange={(e) => {
              setTaskData({ ...taskData, task: e.target.value });
            }}
            value={taskData?.task || ""}
            required
          />
          <label htmlFor="floatingInput" className="text-dark">
            Task
          </label>
        </div>

        {/* Date and time */}
        <label htmlFor="time-date" className="text-light mb-3">
          Date & Time
        </label>
        <div className="row row-cols-2 mb-5">
          <div className="col">
            <input
              type="date"
              className=" form-control"
              id="time-date"
              placeholder="Task"
              value={taskData?.date || ""}
              onChange={(e) => {
                setTaskData({ ...taskData, date: e.target.value });
              }}
            />
          </div>

          {/* Time */}

          <div className="col">
            <input
              type="time"
              className="form-control"
              id="time-date"
              placeholder="Task"
              value={taskData?.time || ""}
              onChange={(e) => {
                setTaskData({ ...taskData, time: e.target.value });
              }}
            />
          </div>
        </div>

        {/* Reminder */}
        <div className="d-flex justify-content-between mb-5">
          <div className="form-check">
            <label className="form-check-label" htmlFor="reminder">
              Set Reminder
            </label>
            <input
              className="form-check-input me-4"
              type="checkbox"
              id="reminder"
              onChange={(e) => {
                setTaskData({
                  ...taskData,
                  reminder: e.currentTarget.checked,
                });
              }}
              checked={taskData?.reminder ? true : false}
            />
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="completed">
              completed
            </label>
            <input
              className="form-check-input me-4"
              type="checkbox"
              id="completed"
              onChange={(e) => {
                setTaskData({
                  ...taskData,
                  completed: e.currentTarget.checked,
                });
              }}
              checked={taskData?.completed ? true : false}
            />
          </div>
        </div>

        <button className="btn btn-lg j-btn-secondary w-100">
          Update Task
        </button>
      </div>
    </form>
  );
};

export default UpdateTaskForm;
