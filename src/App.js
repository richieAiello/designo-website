import {render} from "react-dom";
import {BroswerRouter, Route, Switch} from "react-router-dom";
import AboutPage from "./components/routes/AboutPage";
import AppDesignPage from "./components/routes/AppDesignPage";
import ContactPage from "./components/routes/ContactPage";
import GraphicDesignPage from "./components/routes/GraphicDesignPage";
import HomePage from "./components/routes/HomePage";
import LocationsPage from "./components/routes/LocationsPage";
import WebDesignPage from "./components/routes/WebDesignPage";

const root = document.getElementById('root');

const App = () => {
  return (
    <BroswerRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/app-design">
          <AppDesignPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/graphic-design">
          <GraphicDesignPage />
        </Route>
        <Route exact path="/locations">
          <LocationsPage />
        </Route>
        <Route exact path="/web-design">
          <WebDesignPage />
        </Route>
      </Switch>
    </BroswerRouter>
  );
}

render(<App />, root);