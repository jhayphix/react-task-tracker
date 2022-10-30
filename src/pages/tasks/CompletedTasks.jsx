import { useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import classes from "./tasks.module.css";
import TaskList from "../../components/tasks/TaskList";

const CompletedTasks = () => {
  const { getTasks, isLoading, completedTasks } = useContext(TaskContext);

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
          tasksData={completedTasks.reverse()}
          noTaskText="You've not completed any task"
        />
      )}
    </section>
  );
};

export default CompletedTasks;
