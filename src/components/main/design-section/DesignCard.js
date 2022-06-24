import { useRef } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import icon from "../../../assets/shared/desktop/icon-right-arrow.svg";

export default function DesignCard(props) {
  const link = useRef();

  const handleLinkClick = e => {
    link.current.click();
  }

  return (
    <div 
      className={clsx({
        "design__card": true,
        "design__card--app": props.app,
        "design__card--web": props.web,
        "design__card--large": props.large,
        "design__card--graphic": props.graphic
      })}
      onClick={handleLinkClick}
      tabIndex={0}
      aria-label="Click to view projects."
    >
      <div className="design__context">
        <h2 className="design__heading bold">
          {props.app && "App Design"}
          {props.web && "Web Design"}
          {props.graphic && "Graphic Design"}
        </h2>
        <Link
          to={clsx({
            "/app-design": props.app,
            "/web-design": props.web,
            "/graphic-design": props.graphic
          })}
          className="design__link link"
          ref={link}
          tabIndex={-1}
        >
          View Projects
          <img src={icon} alt="" className="design__icon"/>
        </Link>
      </div>
    </div>
  );
}