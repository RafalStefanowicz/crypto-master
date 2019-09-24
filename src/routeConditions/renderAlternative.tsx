import React from "react";

export const renderAlternative = <A extends object>(
  Alternative: React.ComponentType<A>
) => <P extends object>(Component: React.ComponentType<P>) => {
  const RenderAlternative = ({ renderAlternative, ...otherProps }: any) => {
    return renderAlternative ? (
      <Alternative {...(otherProps as A)} />
    ) : (
      <Component {...(otherProps as P)} />
    );
  };

  return RenderAlternative;
};
