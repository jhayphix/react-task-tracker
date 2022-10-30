import { useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskList from "../../components/tasks/TaskList";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

const TasksPage = () => {
  const { getTasks, isLoading, tasksData } = useContext(TaskContext);

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <section style={{ height: "100%" }}>
      
      <div className="border border-secondary task-main-wrapper">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <TaskList tasksData={tasksData.reverse()} />
        )}
      </div>
    </section>
  );
};

export default TasksPage;
