import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { Ranking } from "./Ranking";
import { Loader } from "../../Loader/Loader";
import { Firebase } from "../../../firebase/Firebase";
import { withFirebase } from "../../../firebase/withFirebase";
import { IStore } from "../../../redux/reducers";
import { CryptosI } from "../../../redux/reducers/cryptos";
import { IsLoggedInType } from "../../../redux/reducers/isLoggedIn";
import { useWallets } from "../../../customHooks/useWallets";

interface RankingDataHandlerProps {
  firebase: Firebase;
  cryptos: CryptosI;
  isLoggedIn: IsLoggedInType;
}
const _RankingDataHandler = ({
  firebase,
  cryptos,
  isLoggedIn
}: RankingDataHandlerProps) => {
  const wallets = useWallets(firebase);

  if (!isLoggedIn || !cryptos || !Object.keys(wallets).length)
    return <Loader />;

  return <Ranking wallets={wallets} cryptos={cryptos} />;
};

const mapStateToProps = (state: IStore) => ({
  isLoggedIn: state.isLoggedIn,
  cryptos: state.cryptos
});

export default compose(
  connect(mapStateToProps),
  withFirebase
)(_RankingDataHandler) as React.FC;
