import { TransactionType } from "../components/TradeLogic/TradeLogic";
import { InvestmentsI } from "../types/Investments";

interface GetInvestmentAfterTransactionProps {
  transactionType: TransactionType;
  investments: InvestmentsI;
  cryptoSymbol: string;
  cryptoAmount: number;
  usdAmount: number;
}
export const getInvestmentAfterTransaction = ({
  transactionType,
  investments,
  cryptoSymbol,
  cryptoAmount,
  usdAmount
}: GetInvestmentAfterTransactionProps) => {
  const investmentsAfterTransaction = JSON.parse(JSON.stringify(investments));
  //references
  const pastInvestments = investmentsAfterTransaction.past[cryptoSymbol];
  const pendingInvestments = investmentsAfterTransaction.pending[cryptoSymbol];

  if (transactionType === TransactionType.buy) {
    pendingInvestments[Date.now()] = {
      cryptoAmount,
      buyPrice: Math.floor((usdAmount / cryptoAmount) * 100) / 100
    };
  }

  if (transactionType === TransactionType.sell) {
    const times = Object.keys(pendingInvestments).sort();
    //copy cryptoAmount
    let amount = cryptoAmount;
    let sellTime = Date.now();

    for (let i = 0; amount > 0; i++) {
      const buyCryptoAmount = pendingInvestments[times[i]].cryptoAmount;
      const buyPrice = pendingInvestments[times[i]].buyPrice;

      const sellPrice = usdAmount / cryptoAmount;

      const roi = sellPrice / buyPrice;
      let sellCryptoAmount = 0;

      if (buyCryptoAmount > amount) {
        sellCryptoAmount = amount;
        pendingInvestments[times[i]].cryptoAmount = buyCryptoAmount - amount;
        amount -= buyCryptoAmount;
      } else if (buyCryptoAmount <= amount) {
        sellCryptoAmount = buyCryptoAmount;
        pendingInvestments[times[i]] = {};
        amount -= buyCryptoAmount;
      }

      sellTime += 1;
      pastInvestments[sellTime] = {
        buyTime: times[i],
        sellTime: sellTime,
        sellCryptoAmount,
        buyPrice,
        sellPrice,
        roi
      };
    }
  }
  return investmentsAfterTransaction;
};
