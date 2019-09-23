import { get20CryptosURL } from "../api/cryptoCompareApi";

export const fetchCryptos = async () => {
  try {
    const response = await fetch(get20CryptosURL);
    const cryptos = await response.json();
    return cryptos.RAW;
  } catch (error) {
    console.log(error);
  }
};
