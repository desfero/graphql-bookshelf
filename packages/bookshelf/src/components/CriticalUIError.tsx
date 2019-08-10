import React from "react";

type ExternalProps = {
  message?: string;
};

const CriticalUIError: React.FunctionComponent<ExternalProps> = ({
  message,
}) => (
  <section role="alert">
    <h1>We're sorry — something's gone wrong.</h1>
    {message && <p>{message}</p>}
  </section>
);

export { CriticalUIError };
