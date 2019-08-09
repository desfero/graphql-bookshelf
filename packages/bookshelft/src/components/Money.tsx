import * as React from "react";

type ExternalProps = {
  value: number;
};

const Money: React.FunctionComponent<ExternalProps> = ({ value, ...props }) => (
  <span {...props}>{value.toFixed(2)}</span>
);

export { Money };
