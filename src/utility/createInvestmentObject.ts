export const createInvestmentsObject = (
  investments: any,
  cryptoSymbol: string
) => {
  if (!investments) {
    investments = {};
  }
  if (!investments.pending) {
    investments.pending = {};
  }
  if (!investments.pending[cryptoSymbol]) {
    investments.pending[cryptoSymbol] = {};
  }
  if (!investments.past) {
    investments.past = {};
  }
  if (!investments.past[cryptoSymbol]) {
    investments.past[cryptoSymbol] = {};
  }

  return investments;
};
