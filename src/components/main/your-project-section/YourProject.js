import { Link } from "react-router-dom";

export default function YourProject() {
  return (
    <section className="your-project container">
      <h4 className="your-project__heading">
        Let's talk about
        <br />
        your project
      </h4>
      <p className="your-project__text">
        Ready to take it to the next level? Contact us today and find 
        out how our expertise can help your business grow.
      </p>
      <Link to="/contact" className="btn btn--your-project link">
        get in touch
      </Link>
    </section>
  );
}