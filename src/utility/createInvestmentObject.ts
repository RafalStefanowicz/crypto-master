export const createInvestmentsObject = (
  investments: any,
  cryptoSymbol: string
) => {
  if (!investments) {
    investments = {};
  }
  if (!investments.current) {
    investments.current = {};
  }
  if (!investments.current[cryptoSymbol]) {
    investments.current[cryptoSymbol] = {};
  }
  if (!investments.completed) {
    investments.completed = {};
  }
  if (!investments.completed[cryptoSymbol]) {
    investments.completed[cryptoSymbol] = {};
  }

  return investments;
};
