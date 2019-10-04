import React from "react";
import { connect } from "react-redux";

import { Route, Switch } from "react-router-dom";

import { Home } from "../layouts/Home/Home";
import { StockContainer } from "../layouts/Stock/StockContainer";
import { Ranking } from "../layouts/Ranking/Ranking";
import { InvestmentsDataHandler } from "../layouts/Investments/InvestmentsDataHandler";
import { AccountLogic } from "../layouts/Account/AccountLogic";
import { ROUTES } from "../../types";
import { IStore } from "../../redux/reducers";
import { IsLoggedInType } from "../../redux/reducers/isLoggedIn";

interface PageProps {
  isLoggedIn: IsLoggedInType;
}

const _Page = ({ isLoggedIn }: PageProps) => {
  return (
    <Switch>
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
        path={ROUTES.INVESTMENTS}
      />
      <Route
        component={isLoggedIn === false ? Home : Ranking}
        path={ROUTES.RANK}
      />
    </Switch>
  );
};

const mapStateToProps = (state: IStore) => ({ isLoggedIn: state.isLoggedIn });

export const Page = connect(mapStateToProps)(_Page);
