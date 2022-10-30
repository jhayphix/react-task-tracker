import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Layouts from "./Layouts";
import NewTask from "./pages/new-task/NewTask";
import TasksPage from "./pages/all-tasks/TasksPage";
import UpdateTask from "./pages/update-task/UpdateTask";
import Tasks from "./pages/tasks/Tasks";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/not-found/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layouts>
        <Header />
        <Routes>
          <Route index exact element={<HomePage />} />
          <Route path="/add-task" element={<NewTask />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/update-task/:id" element={<UpdateTask />} />
          <Route path="/all-tasks" element={<TasksPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layouts>
    </BrowserRouter>
  );
};

export default App;
