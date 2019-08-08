/// <reference types="react-scripts" />

import * as React from "react";

export type QueryFunctionComponent<P = {}> = React.FunctionComponent<P> & {
  query: any;
};

export type LayoutFunctionComponent<P = {}> = React.FunctionComponent<P> & {
  fragment: any;
};
