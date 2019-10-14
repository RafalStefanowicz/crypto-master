export const getCurrencyFormat = (number: number) => {
  let format = 100;
  if (number < 10) {
    format = 1000;
    if (number < 1) {
      format = 10000;
    }
  }

  return Math.floor(Math.round(number * format)) / format;
};

export const getCryptoFormat = (number: number) =>
  Math.floor(Math.round(number * 10000)) / 10000;
