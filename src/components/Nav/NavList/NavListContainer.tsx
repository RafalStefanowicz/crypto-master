import { connect } from "react-redux";

import { NavList } from "./NavList";
import { IStore } from "../../../redux/reducers";

import { renderAlternative } from "../../../routeConditions/renderAlternative";

const _NavListContainer = renderAlternative(() => null)(NavList);

const mapStateToProps = (state: IStore) => ({
  renderAlternative: !state.isLoggedIn
});

export const NavListContainer = connect(mapStateToProps)(_NavListContainer);
