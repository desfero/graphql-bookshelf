import React from "react";
import { storiesOf } from "@storybook/react";

import { InputError } from "./";

storiesOf("InputError", module).add("default", () => (
  <InputError>Is required</InputError>
));
