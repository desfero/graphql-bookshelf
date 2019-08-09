import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs/react";

import { Modal } from "./";

const title = "Modal title";
const desc = "Modal description";

storiesOf("Modal", module).add("default", () => (
  <Modal isOpen={boolean("isOpen", true)}>
    <header>
      <h3>{title}</h3>
      <p>{desc}</p>
    </header>
  </Modal>
));
