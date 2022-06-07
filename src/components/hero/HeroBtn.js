import { Link } from "react-router-dom";

export default function HeroBtn() {
  return (
    <Link to="/about" className="btn btn--hero link">
      learn more
    </Link>
  );
}