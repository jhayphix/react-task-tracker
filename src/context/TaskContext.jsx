import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [collapseIsShowing, setCollapseIsShowing] = useState(false);

  // __________ Get Data
  const [tasksData, setTasksData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTasks = async () => {
    const taskFromServer = await fetchTasks();
    setIsLoading(false);
    setTasksData(taskFromServer);
  };
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:8000/tasks");
    const data = await response.json();
    return data;
  };
  // __________ Add task
  const addTaskHandler = async (task) => {
    const response = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...task, completed: false }),
    });

    const data = await response.json();
    setTasksData([...tasksData, data]);
  };

  // ___________ Remove task
  const removeTaskHandler = async (id) => {
    const data = tasksData.find((task) => task.id === id);
    const filteredData = tasksData.filter((task) => task.id !== id);

    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setTasksData(filteredData);
  };

  // ___________ Update Task
  const updateTaskHandler = async (taskData) => {
    await fetch(`http://localhost:8000/tasks/${taskData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData),
    });
  };

  // ____________ Tasks
  const reminderTasks = tasksData?.filter((task) => task.reminder === true);
  const completedTasks = tasksData?.filter((task) => task.completed === true);

  const context = {
    collapseIsShowing: collapseIsShowing,
    setCollapseIsShowing: setCollapseIsShowing,
    tasksData: tasksData,
    setTasksData: setTasksData,
    fetchTasks: fetchTasks,
    addTaskHandler: addTaskHandler,
    removeTaskHandler: removeTaskHandler,
    updateTaskHandler: updateTaskHandler,
    getTasks: getTasks,
    isLoading: isLoading,
    reminderTasks: reminderTasks,
    completedTasks: completedTasks,
  };

  return (
    <TaskContext.Provider value={context}>{children}</TaskContext.Provider>
  );
};

export default TaskContextProvider;
