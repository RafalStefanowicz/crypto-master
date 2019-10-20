import _mapValues from "lodash/mapValues";
import { FetchedCryptosI } from "../redux/reducers/cryptos";

import { get20CryptosURL } from "../api/cryptoCompareApi";
import { getCurrencyFormat } from "./numberFormats";
import { CRYPTO_COMPARE_KEY } from "../keys/keys";

export const fetchCryptos = async () => {
  try {
    const response = await fetch(get20CryptosURL, {
      headers: {
        authorization: CRYPTO_COMPARE_KEY
      }
    });
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
