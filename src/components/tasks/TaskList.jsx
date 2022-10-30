import TaskItem from "./TaskItem";
// import { useContext } from "react";
// import { TaskContext } from "../../context/TaskContext";
import { Link } from "react-router-dom";

const TaskList = ({ tasksData, noTaskText }) => {
  // const { tasksData } = useContext(TaskContext);

  if (tasksData?.length) {
    return (
      <ul className="list-group pt-2 pb-5">
        {tasksData?.map((task, index) => {
          return <TaskItem task={task} key={index} />;
        })}
      </ul>
    );
  } else {
    return (
      <div className="lead my-5 mx-3">
        <div>
          {noTaskText}
          <Link
            to="/add-task"
            className="j-text-secondary text-decoration-underline ms-3"
          >
            Add one
          </Link>
        </div>
      </div>
    );
  }
};

TaskList.defaultProps = {
  noTaskText: "No task available",
};

export default TaskList;
