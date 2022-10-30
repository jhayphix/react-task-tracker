import { Link } from "react-router-dom";

const Button = ({ className, buttonText, to, onClick }) => {
  return (
    <Link onClick={onClick} to={to} className={`btn ${className}`}>
      {buttonText}
    </Link>
  );
};

Button.defaultProps = {
  buttonText: "Add",
};
export default Button;
