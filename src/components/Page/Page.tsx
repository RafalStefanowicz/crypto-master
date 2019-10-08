import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";

import { Route, Switch } from "react-router-dom";

import { ROUTES } from "../../types";
import { IStore } from "../../redux/reducers";
import { IsLoggedInType } from "../../redux/reducers/isLoggedIn";

const Home = lazy(() => import("../layouts/Home/Home"));
const StockContainer = lazy(() => import("../layouts/Stock/StockContainer"));
const RankingDataHandler = lazy(() =>
  import("../layouts/Ranking/RankingDataHandler")
);
const InvestmentsDataHandler = lazy(() =>
  import("../layouts/Investments/InvestmentsDataHandler")
);
const AccountLogic = lazy(() => import("../layouts/Account/AccountLogic"));

interface PageProps {
  isLoggedIn: IsLoggedInType;
}

const _Page = ({ isLoggedIn }: PageProps) => {
  return (
    <Switch>
      <Suspense fallback={<></>}>
        <Route exact component={Home} path={ROUTES.CRYTPO_MASTER} />
        <Route
          component={isLoggedIn === false ? Home : StockContainer}
          path={ROUTES.STOCK}
        />
        <Route
          component={isLoggedIn === false ? Home : AccountLogic}
          path={ROUTES.ACCOUNT}
        />
        <Route
          component={isLoggedIn === false ? Home : InvestmentsDataHandler}
          path={ROUTES.INVESTMENTS_PARAMS}
        />
        <Route
          component={isLoggedIn === false ? Home : RankingDataHandler}
          path={ROUTES.RANK}
        />
      </Suspense>
    </Switch>
  );
};

const mapStateToProps = (state: IStore) => ({ isLoggedIn: state.isLoggedIn });

export const Page = connect(mapStateToProps)(_Page);
