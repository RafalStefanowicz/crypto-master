import { WalletI } from "../redux/reducers/wallet";
import { TransactionType } from "../components/TradeLogic/TradeLogic";
import { getCurrencyFormat, getCryptoFormat } from "./numberFormats";

interface CreateNewWalletProps {
  wallet: WalletI;
  cryptoSymbol: string;
  transactionType: TransactionType;
  usdAmount: number;
  cryptoAmount: number;
}

export const createNewWallet = ({
  wallet,
  cryptoSymbol,
  transactionType,
  usdAmount,
  cryptoAmount
}: CreateNewWalletProps) => {
  const newWallet: WalletI = JSON.parse(JSON.stringify(wallet));

  const usd = newWallet.USD || 0;
  const crypto = newWallet[cryptoSymbol] || 0;
  if (transactionType === TransactionType.buy) {
    newWallet.USD = getCurrencyFormat(usd - usdAmount);
    newWallet[cryptoSymbol] = getCryptoFormat(crypto + cryptoAmount);
  } else {
    newWallet.USD = getCurrencyFormat(usd + usdAmount);
    newWallet[cryptoSymbol] = getCryptoFormat(crypto - cryptoAmount);

    // remove crypto property from wallet when sold
    if (!newWallet[cryptoSymbol]) delete newWallet[cryptoSymbol];
  }
  return newWallet;
};
