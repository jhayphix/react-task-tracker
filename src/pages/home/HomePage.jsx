import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import DetailsCollapse from "../all-tasks/DetailsCollapse";
const HomePage = () => {
  const { getTasks, collapseIsShowing, isLoading } = useContext(TaskContext);

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <main className="mt-5">
      {!collapseIsShowing ? (
        <DetailsCollapse type="none" showCloseBtn={false} collapse={false} />
      ) : (
        <hr />
      )}
      {isLoading ? (
        <section className="text-center my-4">
          <div className="spinner-grow j-bg-secondary" />
          <p className="lead j-text-secondary">Loading...</p>
        </section>
      ) : (
        <div className="text-center">
          <Link to="/add-task" className="j-text-secondary">
            Create A Task
          </Link>
        </div>
      )}
    </main>
  );
};

export default HomePage;
