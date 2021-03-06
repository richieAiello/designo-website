export default function HeroWrapper(props) {
  return (
    <div className={`hero__wrapper hero__wrapper--${props.mod}`}>
      <div className={`hero__context hero__context--${props.mod}`}>
        <h1 className={`hero__heading bold hero__heading--${props.mod}`}>
          {props.heading}
        </h1>
        <p className={`hero__text hero__text--${props.mod}`}>
          {props.text}
        </p>
      </div>
      {props.children}
    </div>
  );
}