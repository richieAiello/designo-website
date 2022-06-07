import QualityImage from "./QualityImage";
import passionate from "../../../assets/home/desktop/illustration-passionate.svg";
import resourceful from "../../../assets/home/desktop/illustration-resourceful.svg";
import friendly from "../../../assets/home/desktop/illustration-friendly.svg";

export default function Quality(props) {
  return (
    <div className="qualities__wrapper">
      <div className="qualities__context">
        <h3 className="qualities__heading bold">
          {props.passionate && "Passionate"}
          {props.resourceful && "Resourceful"}
          {props.friendly && "Friendly"}
        </h3>
        <p className="qualities__text">
          {props.text}
        </p>
      </div>
      {props.passionate && <QualityImage src={passionate} />}
      {props.resourceful && <QualityImage src={resourceful} />}
      {props.friendly && <QualityImage src={friendly} />}
    </div>
  );
}