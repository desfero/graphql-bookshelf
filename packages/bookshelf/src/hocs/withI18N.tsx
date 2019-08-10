import React from "react";
import { IntlProvider } from "react-intl";

import { locales, LANGUAGE } from "../intl";

const withI18N = () => (Wrapper: React.ComponentType<unknown>) => ({
  locale = LANGUAGE.EN,
  ...rest
}) => (
  <IntlProvider
    locale={locale}
    textComponent={React.Fragment}
    messages={locales[locale]}
  >
    <Wrapper {...rest} />
  </IntlProvider>
);

export { withI18N };
