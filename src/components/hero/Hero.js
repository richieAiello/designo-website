export default function Hero(props) {
  return (
    <header className={`hero container--hero hero--${props.modifier}`}>
      <div className={`hero__wrapper hero__wrapper--${props.modifier}`}>
        <h1 className={`hero__heading bold hero__heading--${props.modifier}`}>
          {props.heading}
        </h1>
        <p className={`hero__text hero__text--${props.modifier}`}>
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

