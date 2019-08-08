import { curry } from "ramda";

export const ROOT_ROUTE = "/";

export const EDIT_ROUTE = "/:bookId/edit";

export const withParams = curry((route, params) =>
  route.replace(/:(\w+)/g, (_, match) => {
    const replacement = params[match];

    if (!replacement) {
      throw new Error(`There is not match for ${match} in route ${route}`);
    }

    return replacement;
  }),
);
