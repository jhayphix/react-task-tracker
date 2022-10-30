import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import SuccessBanner from "./../ui/SuccessBanner";

const NewTaskForm = () => {
  const navigate = useNavigate();
  const { addTaskHandler } = useContext(TaskContext);
  const [task, setTask] = useState("None");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);
  const [anotherTask, setAnotherTask] = useState(false);
  const [successBanner, setSuccessBanner] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      task: task,
      date: date,
      time: time,
      reminder: reminder,
    };

    addTaskHandler(newTask);
    if (anotherTask) {
      setSuccessBanner(true);
      setTimeout(() => {
        setSuccessBanner(false);
      }, 4000);
    } else {
      navigate("/tasks");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {successBanner ? <SuccessBanner /> : ""}
      <div className="form-container mt-5 mb-4">
        <div className="form-floating mb-5">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Task"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
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
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
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
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
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
              value={reminder}
              onChange={(e) => {
                setReminder(e.currentTarget.checked);
              }}
            />
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="reminder">
              Add another task
            </label>
            <input
              className="form-check-input me-4"
              type="checkbox"
              id="reminder"
              value={anotherTask}
              onChange={(e) => {
                setAnotherTask(e.currentTarget.checked);
              }}
            />
          </div>
        </div>

        <button className="btn btn-lg j-btn-secondary w-100">Save Task</button>
      </div>
    </form>
  );
};

export default NewTaskForm;
