import { CRYPTO_COMPARE_KEY } from "../keys/keys";

import { cryptoSymbols } from "../constants/cryptoSymbols";

const cryptoList = Object.keys(cryptoSymbols).join(",");

export const get20CryptosURL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoList}&tsyms=USD&api_key=${CRYPTO_COMPARE_KEY}`;
