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

export const getCryptoFormat = (number: number) => {
  let format = 10000;
  if (number > 100) {
    format = 1000;
    if (number > 1000) {
      format = 100;
    }
  }

  return Math.floor(Math.round(number * format)) / format;
};
