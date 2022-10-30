import { useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskList from "../../components/tasks/TaskList";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

import classes from "./tasks.module.css";
const CategoryTask = () => {
  const { getTasks, isLoading, tasksData } = useContext(TaskContext);
  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <section className={`${classes.tasks_list_group_wrapper} py-2 px-1`}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <TaskList
          tasksData={tasksData.reverse()}
          noTaskText="No task available"
        />
      )}
    </section>
  );
};

export default CategoryTask;
