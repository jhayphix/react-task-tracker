import { useLocation } from "react-router-dom";
import Button from "./Button";

const AddTaskBtn = ({ containerClassName }) => {
  const pathname = useLocation().pathname;
  if (pathname === "/add-task") {
    return (
      <div className={containerClassName}>
        <Button to="/" buttonText="Back" className="j-btn-outline-secondary" />
      </div>
    );
  } else {
    return (
      <div className={containerClassName}>
        <Button to="/add-task" buttonText="New" className="j-btn-secondary" />
      </div>
    );
  }
};

export default AddTaskBtn;
