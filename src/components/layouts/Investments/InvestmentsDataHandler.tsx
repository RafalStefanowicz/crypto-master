import React from "react";
import { match } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { Info } from "../../Info/Info";
import { IStore } from "../../../redux/reducers";
import { useInvestmentsDb } from "../../../customHooks/useInvestmentsDb";
import { UserNamesI } from "../../../redux/reducers/userNames";
import { Firebase } from "../../../firebase/Firebase";
import { withFirebase } from "../../../firebase/withFirebase";
import { Loader } from "../../Loader/Loader";
import { InvestmentSwitcher } from "./InvestmentSwitcher/InvestmentSwitcher";
import { withBackButton } from "../../BackButton/withBackButton";

interface InvestmentsDataHandlerProps {
  firebase: Firebase;
  match: match<{ userName: string | undefined }>;
  userNames: UserNamesI;
}
const _InvestmentsDataHandler = ({
  firebase,
  match,
  userNames
}: InvestmentsDataHandlerProps) => {
  const userNameParams = match.params.userName;

  const userId = userNameParams
    ? userNames[userNameParams]
    : firebase.getUserId();

  const investments = useInvestmentsDb(userId, firebase);

  // Investments have already been fetched and are empty
  if (investments === null) {
    return (
      <Info
        infoText={
          userNameParams
            ? `User ${userNameParams} has no investments`
            : "You don't have any investments"
        }
      />
    );
  }

  // Loader when data haven't been loaded yet
  if (!Object.keys(userNames).length || !("current" in investments)) {
    return <Loader />;
  }

  // when user pass manually unexsiting userName
  if (userNameParams && !(userNameParams in userNames)) {
    return <Info infoText={`User ${userNameParams} doesn't exist`} />;
  }

  return (
    <InvestmentSwitcher
      investments={investments}
      userNameParams={userNameParams}
    />
  );
};

const mapStateToProps = (state: IStore) => ({
  userNames: state.userNames
});

export default compose(
  connect(mapStateToProps),
  withFirebase,
  withBackButton
)(_InvestmentsDataHandler) as React.FC;
