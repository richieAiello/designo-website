import { Link } from "react-router-dom";
import icon from "../../assets/shared/desktop/icon-right-arrow.svg";

export default function GraphicDesignCard() {
  return (
    <div className="design__card design__card--graphic">
      <h2 className="design__heading">
        App Design
      </h2>
      <Link to="/graphic-design" className="design__link link">
        View Projects
        <img src={icon} alt="" className="design__icon"/>
      </Link>
    </div>
  );
}