import { connect } from "react-redux";

import { Stock } from "./Stock";
import { renderAlternative } from "../../../routeConditions/renderAlternative";
import { Loader } from "../../Loader/Loader";
import { StockProps } from "./Stock";
import { IStore } from "../../../redux/reducers";
import { withWallet } from "../../Wallet/withWallet";

const StockOrAlternative = renderAlternative(Loader)(Stock);

const mapStateToProps = (
  { isLoggedIn, cryptos }: IStore,
  { wallet }: StockProps
) => {
  const renderAlternative = !wallet || !cryptos || isLoggedIn === null;
  return {
    renderAlternative,
    cryptos
  };
};
const _StockContainer = connect(mapStateToProps)(StockOrAlternative);

export default withWallet(_StockContainer);
