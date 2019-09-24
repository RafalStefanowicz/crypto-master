import _mapValues from "lodash/mapValues";
import { FetchedCryptosI } from "../redux/reducers/cryptos";

import { get20CryptosURL } from "../api/cryptoCompareApi";

export const fetchCryptos = async () => {
  try {
    const response = await fetch(get20CryptosURL);
    const data = await response.json();
    const cryptos = _mapValues(data.RAW, crypto => {
      const PRICE = Math.floor(crypto.USD.PRICE * 100) / 100;
      return {
        ...crypto.USD,
        PRICE
      };
    });
    return cryptos as FetchedCryptosI;
  } catch (error) {
    console.log(error);
  }
};
