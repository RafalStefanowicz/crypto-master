import { CRYPTO_SYMBOLS } from "../types/CRYPTO_SYMBOLS";
import { CRYPTO_COMPARE_KEY } from "../keys/keys";

const cryptoList = Object.keys(CRYPTO_SYMBOLS).join(",");

export const get20CryptosURL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoList}&tsyms=USD&api_key=${CRYPTO_COMPARE_KEY}`;
