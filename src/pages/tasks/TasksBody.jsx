import { useContext } from "react";
import { TasksBodyContext } from "../../context/TasksBodyContext";
import CompletedTasks from "./CompletedTasks";
import ReminderTasks from "./ReminderTasks";
import CategoryTask from "./CategoryTask";

const TasksBody = () => {
  const { allIsActive, reminderIsActive, completedIsActive } =
    useContext(TasksBodyContext);

  if (allIsActive) {
    return <CategoryTask />;
  } else if (reminderIsActive) {
    return <ReminderTasks />;
  } else if (completedIsActive) {
    return <CompletedTasks />;
  } else {
    return <div>TasksBody</div>;
  }
};

export default TasksBody;
