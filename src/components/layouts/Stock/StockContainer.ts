import { connect } from "react-redux";

import { Stock } from "./Stock";
import { renderAlternative } from "../../../routeConditions/renderAlternative";
import { Loader } from "../../Loader/Loader";
import { StockProps } from "./Stock";
import { IStore } from "../../../redux/reducers";
import { withWallet } from "../../Wallet/withWallet";

const StockOrAlternative = renderAlternative(Loader)(Stock);

const mapStateToProps = (state: IStore, { wallet }: StockProps) => {
  const renderAlternative = !wallet || !state.cryptos;
  return {
    renderAlternative
  };
};
const _StockContainer = connect(mapStateToProps)(StockOrAlternative);

export const StockContainer = withWallet(_StockContainer);
