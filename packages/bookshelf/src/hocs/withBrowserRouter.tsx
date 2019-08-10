import React from "react";
import { BrowserRouter } from "react-router-dom";

const withBrowserRouter = () => <P extends {}>(
  Wrapper: React.ComponentType<P>,
) => (props: P) => (
  <BrowserRouter>
    <Wrapper {...props} />
  </BrowserRouter>
);

export { withBrowserRouter };
