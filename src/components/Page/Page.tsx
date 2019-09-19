import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "../layouts/Home/Home";
import { Stock } from "../layouts/Stock/Stock";
import { Ranking } from "../layouts/Ranking/Ranking";
import { History } from "../layouts/History/History";
import { Account } from "../layouts/Account/Account";
import { ROUTES } from "../../types";

export interface PageProps {}

const Page: React.SFC<PageProps> = () => {
  return (
    <Switch>
      <Route exact component={Home} path={ROUTES.CRYTPO_MASTER} />
      <Route component={Stock} path={ROUTES.STOCK} />
      <Route component={Account} path={ROUTES.ACCOUNT} />
      <Route component={History} path={ROUTES.HISTORY} />
      <Route component={Ranking} path={ROUTES.RANK} />
    </Switch>
  );
};

export default Page;
