import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <div className="lead text-center my-5">Page Not Found</div>
      <div className="row text-center">
        <div className="col-6">
          <Link to="/" className="j-text-secondary text-decoration-underline">
            Home
          </Link>
        </div>
        <div className="col-6">
          <Link
            to="/add-task"
            className="j-text-secondary text-decoration-underline"
          >
            Create A Task
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
