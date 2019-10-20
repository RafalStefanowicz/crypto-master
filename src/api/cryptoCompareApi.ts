import { CRYPTO_SYMBOLS } from "../types/CRYPTO_SYMBOLS";

const cryptoList = Object.keys(CRYPTO_SYMBOLS).join(",");

export const get20CryptosURL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoList}&tsyms=USD`;
