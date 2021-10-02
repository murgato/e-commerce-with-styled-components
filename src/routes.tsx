import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

//Importação dos componentes que para que possa aparecer nas rotas
import Home from "./pages/home/";

const Routes = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Home} path="/sobre" />
      </Switch>
    </Router>
  );
};

export default Routes;
