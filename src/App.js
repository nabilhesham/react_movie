import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/elements/Header/Header";
import Home from "./components/Home/Home";
import Movie from "./components/Movie/Movie";
import NotFound from "./components/elements/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
