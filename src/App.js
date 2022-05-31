import {render} from "react-dom";
import {BroswerRouter, Route, Switch, Link} from "react-router-dom";

const root = document.getElementById('root');

const App = () => {
  return (<h1>It's rendering.</h1>);
}

render(<App />, root);