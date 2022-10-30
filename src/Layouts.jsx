import TasksBodyContextProvider from "./context/TasksBodyContext";
import TaskContextProvider from "./context/TaskContext";

const Layouts = ({ children }) => {
  return (
    <main className="app-container row g-0 justify-content-center align-items-center">
      <div className="app-content-wrapper shadow p-4 col-xl-6 col-lg-7 col-md-10 col-12">
        <TaskContextProvider>
          <TasksBodyContextProvider>{children}</TasksBodyContextProvider>
        </TaskContextProvider>
      </div>
    </main>
  );
};

export default Layouts;
