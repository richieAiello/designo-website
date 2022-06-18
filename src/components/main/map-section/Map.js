export default function Map(props) {

  return (
    <section className={`map map--${props.modifier} container--secondary`}>
      <picture className="image--map">
        <source srcSet={props.imgDesktop} media="(min-width: 1440px)" />
        <img src={props.img} alt="" className="image image--map" />
      </picture>
      <div className={`map__context map__context--${props.modifier}`}>
        <h1 className="map__heading bold">
          {props.heading}
        </h1>
        <address className="map__text">
          <p className="bold">{props.office}</p>
          <p>{props.street}</p>
          <p>{props.address}</p>
        </address>
        <address className="map__text">
          <p className="bold">Contact</p>
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </address>
      </div>
    </section>
  );
}