import * as React from "react";

type ExternalProps = {
  value: number;
};

const Money: React.FunctionComponent<ExternalProps> = ({ value }) => (
  <>{value.toFixed(2)}</>
);

export { Money };
