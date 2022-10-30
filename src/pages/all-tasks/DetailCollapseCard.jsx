import { Link } from "react-router-dom";

const DetailCollapseCard = ({ holder }) => {
  return (
    <div className="col px-sm-3 px-1">
      <div
        className="j-bg-dark-light rounded py-3 px-md-4 px-2"
        style={{ position: "relative" }}
      >
        <div className="row">
          <div className="col-9">
            <i className={`${holder.icon} fs-3`}></i>
            <div> {holder.name} </div>
          </div>
          <div className="col-3 text-end">
            <div className="lead fs-3">{holder.number}</div>
          </div>
        </div>
        <Link to="/tasks" className="stretched-link" />
      </div>
    </div>
  );
};

DetailCollapseCard.defaultProps = {
  holder: {
    name: "Reminder",
    icon: "bi bi-facebook",
    number: "4",
  },
};

export default DetailCollapseCard;
