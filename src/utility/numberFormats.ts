export const getCurrencyFormat = (number: number) =>
  Math.floor(number * 100) / 100;

export const getCryptoFormat = (number: number) =>
  Math.floor(number * 10000) / 10000;
