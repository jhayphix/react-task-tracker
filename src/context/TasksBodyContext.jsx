import { createContext, useState } from "react";

export const TasksBodyContext = createContext();

const TasksBodyContextProvider = ({ children }) => {
  const [allIsActive, setAllIsActive] = useState(true);
  const [reminderIsActive, setReminderIsActive] = useState(false);
  const [completedIsActive, setCompletedIsActive] = useState(false);

  const allTabHandler = () => {
    setAllIsActive(true);
    setReminderIsActive(false);
    setCompletedIsActive(false);
  };

  const reminderTabHandler = () => {
    setAllIsActive(false);
    setReminderIsActive(true);
    setCompletedIsActive(false);
  };

  const completedTabHandler = () => {
    setAllIsActive(false);
    setReminderIsActive(false);
    setCompletedIsActive(true);
  };

  const context = {
    reminderIsActive: reminderIsActive,
    setReminderIsActive: setReminderIsActive,
    reminderTabHandler: reminderTabHandler,
    completedIsActive: completedIsActive,
    setCompletedIsActive: setCompletedIsActive,
    completedTabHandler: completedTabHandler,
    allIsActive: allIsActive,
    setAllIsActive: setAllIsActive,
    allTabHandler: allTabHandler,
  };

  return (
    <TasksBodyContext.Provider value={context}>
      {children}
    </TasksBodyContext.Provider>
  );
};

export default TasksBodyContextProvider;
