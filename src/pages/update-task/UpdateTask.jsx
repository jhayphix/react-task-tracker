import { useMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import UpdateTaskForm from "../../components/forms/UpdateTaskForm";

const UpdateTask = () => {
  const { params } = useMatch("/update-task/:id");
  const taskId = params.id;
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/tasks/${taskId}`);
      const data = await response.json();
      setTaskData(data);
    };
    fetchData();
  }, [taskId]);

  return (
    <section>
      <UpdateTaskForm taskData={taskData} setTaskData={setTaskData} />
    </section>
  );
};

export default UpdateTask;
