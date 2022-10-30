import { Link } from "react-router-dom";
import AddTaskBtn from "../ui/AddTaskBtn";

import Dropdown from "../ui/Dropdown";
import DetailsCollapse from "../../pages/all-tasks/DetailsCollapse";

const Header = () => {
  return (
    <header className="mb-3">
      <div className="row align-items-start mb-4">
        <div className="col-md-7 col-sm-6 col-12 text-sm-start text-center mb-sm-0 mb-4">
          <Link to="/" className=" h2 text-light ">
            Task Tracker
          </Link>
        </div>
        <div className="col-md-5 col-sm-6 col-12 align-items-end">
          <div className="row justify-content-end gx-2">
            {/*   Split drop down button  */}
            <div className="col-sm-8 col-6 text-sm-center text-start">
              <Dropdown className="" />
            </div>
            {/*  */}
            <div className="col-sm-4 col-6 text-end">
              <AddTaskBtn containerClassName="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <Link to="/" className="j-text-secondary me-3">
          Home
        </Link>
        <Link to="/tasks" className="j-text-secondary me-3">
          Completed
        </Link>
        <Link to="/tasks" className="j-text-secondary me-3">
          Reminder
        </Link>
      </div>
      <DetailsCollapse />
    </header>
  );
};

export default Header;
