import { Dispatch } from "redux";

import { fetchCryptos } from "../../utility/fetchCryptos";
import { ACTION_TYPES } from "../../types/ACTION_TYPES";
import { CryptosI } from "../../redux/reducers/cryptos";

export interface FetchCryptosAction {
  type: ACTION_TYPES.FETCH_CRYPTOS;
  payload: CryptosI;
}

export const fetchCryptosAction = () => async (dispatch: Dispatch) => {
  const cryptos = await fetchCryptos();
  dispatch<FetchCryptosAction>({
    type: ACTION_TYPES.FETCH_CRYPTOS,
    payload: cryptos
  });
};
