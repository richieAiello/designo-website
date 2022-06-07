import { Link } from "react-router-dom";
import icon from "../../assets/shared/desktop/icon-right-arrow.svg";

export default function WebDesignCard() {
  return (
    <div className="design__card design__card--web">
      <h2 className="design__heading">
        App Design
      </h2>
      <Link to="/web-design" className="design__link link">
        View Projects
        <img src={icon} alt="" className="design__icon"/>
      </Link>
    </div>
  );
}