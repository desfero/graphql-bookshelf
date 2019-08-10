import React from "react";
import { IntlProvider } from "react-intl";

import { locales } from "../intl";

const withI18N = () => Wrapper => ({ locale = "en", ...rest }) => (
  <IntlProvider
    locale={locale}
    textComponent={React.Fragment}
    messages={locales[locale]}
  >
    <Wrapper {...rest} />
  </IntlProvider>
);

export { withI18N };
