import React from "react";
import { Route, Switch } from "react-router-dom";
import { EDIT_ROUTE, ROOT_ROUTE } from "../constants/routes";

import { BooksList } from "./books/BooksList";
import { BookEdit } from "./books/BookEdit";

const sagas = [];

const reducers = {};

const Scenes = () => (
  <React.Fragment>
    <Switch>
      <Route path={ROOT_ROUTE} render={() => <BooksList />} exact={true} />
      <Route
        path={EDIT_ROUTE}
        render={({ match }) => <BookEdit id={match.params.bookId} />}
        exact={true}
      />
    </Switch>
  </React.Fragment>
);

export { Scenes, sagas, reducers };
