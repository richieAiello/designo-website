import images from "./ProjectsImages";

export default function ProjectsCard(props) {
  let cardImage;
  let cardHeading;

  images.filter(image => {
    if (image.id === props.card) {
      cardImage = image.src;
      cardHeading = image.heading;
    }
  })

  return (
    <div className="projects__card">
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
    </div>
  );
}