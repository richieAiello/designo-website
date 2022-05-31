import {render} from "react-dom";

const root = document.getElementById('root');

const App = () => {
  return (<h1>It's rendering.</h1>);
}

render(<App />, root);