import { curry } from "ramda";

export const ROOT_ROUTE = "/";

// TODO: Add 404 page
export const NOT_FOUND_ROUTE = ROOT_ROUTE;

export const EDIT_ROUTE = "/:bookId/edit";

export const CREATE_ROUTE = "/create";

export const withParams = curry(
  (route: string, params: Record<string, string | undefined>) =>
    route.replace(/:(\w+)/g, (_, match) => {
      const replacement = params[match];

      if (!replacement) {
        throw new Error(`There is not match for ${match} in route ${route}`);
      }

      return replacement;
    }),
);
