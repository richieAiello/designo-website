export default function Hero(props) {
  return (
    <section className={`hero hero--${props.mod} container--secondary`}>
      {props.children}
    </section>
  );
}

