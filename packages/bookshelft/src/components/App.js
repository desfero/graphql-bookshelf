import { connect } from "react-redux";
import { branch, compose, lifecycle, renderComponent } from "recompose";
import { withLayout } from "@bookshelf/layout";
import { withRouter } from "react-router-dom";

import { store } from "../store/index";
import { CriticalUIError } from "./CriticalUIError";
import { logCriticalUIError } from "../actions";
import { criticalUIErrorSelector } from "../reducers";
import { withStoreProvider } from "../hocs/withStoreProvider";
import { AppLayout } from "./AppLayout";
import { withI18N } from "../hocs/withI18N";
import { withApolloProvider } from "../hocs/withApolloProvider";
import { NotFoundError } from "../constants/errors";
import { NOT_FOUND_ROUTE } from "../constants/routes";
import { withBrowserRouter } from "../hocs/withBrowserRouter";

const mapStateToProps = state => ({
  criticalUIError: criticalUIErrorSelector(state),
});

const mapDispatchToProps = { logCriticalUIError };

const App = compose(
  withStoreProvider(store),
  withApolloProvider(),
  withI18N(),
  withLayout(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withBrowserRouter(),
  withRouter,
  lifecycle({
    componentDidCatch(error, errorInfo) {
      if (error instanceof NotFoundError) {
        this.props.history.push(NOT_FOUND_ROUTE);
      } else {
        this.props.logCriticalUIError({ error, extra: errorInfo });
      }
    },
  }),
  branch(props => props.criticalUIError, renderComponent(CriticalUIError)),
)(AppLayout);

export { App };
