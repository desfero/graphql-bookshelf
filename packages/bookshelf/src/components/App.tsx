import { compose } from "recompose";
import { withLayout } from "@bookshelf/layout";
import { withRouter } from "react-router-dom";

import { AppLayout } from "./AppLayout";
import { withI18N } from "../hocs/withI18N";
import { withApolloProvider } from "../hocs/withApolloProvider";
import { withBrowserRouter } from "../hocs/withBrowserRouter";

const App = compose<{}, {}>(
  withApolloProvider(),
  withI18N(),
  withLayout(),
  withBrowserRouter(),
  withRouter,
)(AppLayout);

export { App };
