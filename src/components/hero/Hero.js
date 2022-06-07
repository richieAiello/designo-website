export default function Hero(props) {
  return (
    <header className={`hero container--hero ${props.heroClass}`}>
      <div className={`hero__wrapper ${props.wrapperClass}`}>
        <h1 className="hero__heading bold">
          {props.heading}
        </h1>
        <p className="hero__text">
          {props.text}
        </p>
        {props.btn}
        {props.image}
        {props.form}
      </div>
      {props.banner}
    </header>
  );
}

