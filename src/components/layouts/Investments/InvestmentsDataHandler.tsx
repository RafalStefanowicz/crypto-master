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
  let searchUserId = null;

  if (userNameParams) {
    searchUserId = userNames[userNameParams];
  }

  const userId = searchUserId || firebase.getUserId();
  const investments = useInvestmentsDb(userId, firebase);

  // Loader when data hasn't loaded
  if (!Object.keys(userNames).length || !("current" in investments)) {
    return <Loader />;
  }

  // when user pass manually unexsiting userName
  if (searchUserId === undefined) {
    return <Info infoText={`User ${userNameParams} doesn't exist`} />;
  }

  return <InvestmentSwitcher investments={investments} />;
};

const mapStateToProps = (state: IStore) => ({
  userNames: state.userNames
});

export const InvestmentsDataHandler = compose(
  connect(mapStateToProps),
  withFirebase
)(_InvestmentsDataHandler) as React.FC;
