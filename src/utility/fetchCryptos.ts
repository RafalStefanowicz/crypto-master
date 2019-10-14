import _mapValues from "lodash/mapValues";
import { FetchedCryptosI } from "../redux/reducers/cryptos";

import { get20CryptosURL } from "../api/cryptoCompareApi";
import { getCurrencyFormat } from "./numberFormats";

export const fetchCryptos = async () => {
  try {
    const response = await fetch(get20CryptosURL);
    const data = await response.json();
    const cryptos: FetchedCryptosI = _mapValues(data.RAW, crypto => {
      const PRICE = getCurrencyFormat(crypto.USD.PRICE);
      return {
        ...crypto.USD,
        PRICE
      };
    });
    return cryptos;
  } catch (error) {
    console.log(error);
  }
};
