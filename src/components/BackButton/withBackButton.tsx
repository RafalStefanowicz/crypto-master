import React from "react";

import { withRouter, RouteComponentProps } from "react-router";
import { BackButton } from "./BackButton";

export const withBackButton = <P extends RouteComponentProps>(
  Component: React.ComponentType<P>
) => {
  const WithBackButton = ({
    history,
    match,
    ...otherProps
  }: P & RouteComponentProps<{ userName: string | undefined }>) => {
    const userName = match.params.userName;
    return (
      <>
        {userName ? <BackButton goBack={history.goBack}></BackButton> : null}
        <Component {...(otherProps as P)} history={history} match={match} />
      </>
    );
  };

  return withRouter(WithBackButton);
};
