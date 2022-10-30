import TasksBody from "./TasksBody";
import TasksNav from "./TasksNav";

const Tasks = () => {
  return (
    <div className="card text-center h-100 j-bg-dark-light">
      <TasksNav />
      <TasksBody />
    </div>
  );
};

export default Tasks;
