/// <reference types="react-scripts" />

import * as React from "react";
import { DocumentNode } from "graphql";

export type QueryFunctionComponent<P = {}> = React.FunctionComponent<P> & {
  query: DocumentNode;
};

export type LayoutFunctionComponent<P = {}> = React.FunctionComponent<P> & {
  fragment: DocumentNode;
};

/**
 * In T, mark as required properties from K
 * Useful for types narrowing after recompose `branch` method
 * @example
 * RequiredByKeys<{ foo?: boolean, bar?: string }, "foo"> // { foo: boolean, bar?: string }
 */
export type RequiredByKeys<T, K extends keyof T> = Required<Pick<T, K>> &
  Omit<T, K>;
