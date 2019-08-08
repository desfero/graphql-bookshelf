import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROOT_ROUTE } from "../constants/routes";

const sagas = [];

const reducers = {
};

const Scenes = () => (
  <React.Fragment>
    <Switch>
        <Route path={ROOT_ROUTE} render={() => <h2>landing</h2>} />
    </Switch>
  </React.Fragment>
);

export { Scenes, sagas, reducers };
