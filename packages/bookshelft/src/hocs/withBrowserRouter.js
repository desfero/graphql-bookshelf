import React from "react";
import { BrowserRouter } from "react-router-dom";

const withBrowserRouter = () => Wrapper => props => (
  <BrowserRouter>
    <Wrapper {...props} />
  </BrowserRouter>
);

export { withBrowserRouter };
