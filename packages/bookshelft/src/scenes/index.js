import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROOT_ROUTE } from "../constants/routes";
import {BooksList} from "./books-list";

const sagas = [];

const reducers = {
};

const Scenes = () => (
  <React.Fragment>
    <Switch>
        <Route path={ROOT_ROUTE} render={() => <BooksList />} />
    </Switch>
  </React.Fragment>
);

export { Scenes, sagas, reducers };
