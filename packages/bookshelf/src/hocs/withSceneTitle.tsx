import React from "react";
import { Helmet } from "react-helmet";

const withSceneTitle = <P extends {}>(
  getSceneTitle: (props: P) => React.ReactNode,
) => (Wrapper: React.ComponentType<P>) => (props: P) => {
  const title = getSceneTitle(props);

  return (
    <React.Fragment>
      {title && (
        <Helmet>
          <title>{title}</title>
        </Helmet>
      )}
      <Wrapper {...props} />
    </React.Fragment>
  );
};

export { withSceneTitle };
