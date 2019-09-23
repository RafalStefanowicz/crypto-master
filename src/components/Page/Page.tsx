import * as React from "react";
import { connect } from "react-redux";

import { Route, Switch } from "react-router-dom";

import { Home } from "../layouts/Home/Home";
import { StockContainer } from "../layouts/Stock/StockContainer";
import { Ranking } from "../layouts/Ranking/Ranking";
import { History } from "../layouts/History/History";
import { Account } from "../layouts/Account/Account";
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
        component={isLoggedIn ? StockContainer : Home}
        path={ROUTES.STOCK}
      />
      <Route component={isLoggedIn ? Account : Home} path={ROUTES.ACCOUNT} />
      <Route component={isLoggedIn ? History : Home} path={ROUTES.HISTORY} />
      <Route component={isLoggedIn ? Ranking : Home} path={ROUTES.RANK} />
    </Switch>
  );
};

const mapStateToProps = (state: IStore) => ({ isLoggedIn: state.isLoggedIn });

export const Page = connect(mapStateToProps)(_Page);
