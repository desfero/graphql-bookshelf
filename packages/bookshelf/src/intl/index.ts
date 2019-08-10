import { messages as enMessages } from "./locales/en";
import { messages as deMessages } from "./locales/de";

enum LANGUAGE {
  EN = "en",
  DE = "de",
}

const locales = {
  [LANGUAGE.EN]: enMessages,
  [LANGUAGE.DE]: deMessages,
};

export { locales, LANGUAGE };
