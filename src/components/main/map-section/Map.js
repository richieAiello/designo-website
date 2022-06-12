export default function Map(props) {

  return (
    <section className={`map map--${props.modifier} container--secondary`}>
      <picture>
        <source srcSet={props.desktop} media="(min-width: 1440px)" />
        <img src={props.modifier} alt="" className="image image--map" />
      </picture>
      <div className={`map__context map__context--${props.modifier}`}>
        <h1 className="map__heading bold">
          {props.heading}
        </h1>
        <address className="map__text">
          <span className="bold">{props.office}</span>
          <br />
          {props.street}
          <br />
          {props.address}
        </address>
        <address className="map__text">
          <span className="bold">Contact</span>
          <br />
          {props.phone}
          <br />
          {props.email}
        </address>
      </div>
    </section>
  );
}