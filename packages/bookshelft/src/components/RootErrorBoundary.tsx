import * as React from "react";
import Raven from "raven-js";
import { RouteComponentProps, withRouter } from "react-router";

import { CriticalUIError } from "./CriticalUIError";
import { NotFoundError } from "../constants/errors";
import { NOT_FOUND_ROUTE } from "../constants/routes";

class RootErrorBoundary extends React.Component<RouteComponentProps> {
  state = {
    hasError: false,
  };

  componentDidCatch(error: Error, errorInfo: unknown) {
    if (error instanceof NotFoundError) {
      this.props.history.push(NOT_FOUND_ROUTE);
    } else {
      this.setState({ hasError: true });
      Raven.captureException(error, { extra: errorInfo });
    }
  }

  render() {
    if (this.state.hasError) {
      return <CriticalUIError />;
    }

    return this.props.children;
  }
}

const RootErrorBoundaryWithRouter = withRouter(RootErrorBoundary);

export { RootErrorBoundaryWithRouter as RootErrorBoundary };
