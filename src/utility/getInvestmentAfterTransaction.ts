import { TransactionType } from "../components/TradeLogic/TradeLogic";
import { InvestmentsI } from "../types/InvestmentsInterfaces";
import { getCryptoFormat } from "./numberFormats";

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
  const completedInvestments =
    investmentsAfterTransaction.completed[cryptoSymbol];
  const currentInvestments = investmentsAfterTransaction.current[cryptoSymbol];

  if (transactionType === TransactionType.buy) {
    currentInvestments[Date.now()] = {
      cryptoAmount,
      buyPrice: usdAmount / cryptoAmount
    };
  }

  if (transactionType === TransactionType.sell) {
    const times = Object.keys(currentInvestments).sort();
    //copy cryptoAmount
    let amount = cryptoAmount;
    let sellTime = Date.now();
    for (let i = 0; amount > 0; i++) {
      const buyCryptoAmount = getCryptoFormat(
        currentInvestments[times[i]].cryptoAmount
      );
      const buyPrice = currentInvestments[times[i]].buyPrice;
      const sellPrice = usdAmount / cryptoAmount;
      const roi = sellPrice / buyPrice;
      let sellCryptoAmount = 0;

      if (buyCryptoAmount > amount) {
        sellCryptoAmount = amount;
        currentInvestments[times[i]].cryptoAmount = buyCryptoAmount - amount;
        amount = getCryptoFormat(amount - buyCryptoAmount);
      } else if (buyCryptoAmount <= amount) {
        sellCryptoAmount = buyCryptoAmount;
        currentInvestments[times[i]] = {};
        amount = getCryptoFormat(amount - buyCryptoAmount);
      }

      sellTime += 1;
      completedInvestments[sellTime] = {
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
