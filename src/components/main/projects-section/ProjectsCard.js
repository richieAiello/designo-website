import images from "./ProjectsImages";
import { useRef } from "react";

export default function ProjectsCard(props) {
  const link = useRef();

  const handleLinkClick = e => {
    link.current.click();
  }

  let cardImage;
  let cardHeading;

  images.filter(image => {
    if (image.id === props.card) {
      cardImage = image.src;
      cardHeading = image.heading;
    }
  })

  return (
    <div 
      className="projects__card" 
      tabIndex={0}
      onClick={handleLinkClick}
      role="link"
      aria-label="Click to view project website."
    >
      <div className="projects__context">
        <h2 className="projects__heading bold">
          {cardHeading}
        </h2> 
        <p className="projects__text">
          {props.text}
        </p>
      </div>
      <img
        src={cardImage}
        alt=""
        className="image image--projects"
      />
      <a href="#" tabIndex={-1} aria-hidden={true} className="invisible" ref={link}></a>
    </div>
  );
}