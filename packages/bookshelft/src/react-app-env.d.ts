/// <reference types="react-scripts" />

import * as React from "react";
import { DocumentNode } from "graphql";

export type QueryFunctionComponent<P = {}> = React.FunctionComponent<P> & {
  query: DocumentNode;
};

export type LayoutFunctionComponent<P = {}> = React.FunctionComponent<P> & {
  fragment: DocumentNode;
};
