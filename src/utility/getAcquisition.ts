import { TransactionType } from "../components/TradeLogic/TradeLogic";
import { getCurrencyFormat, getCryptoFormat } from "./numberFormats";

const FEE_AMOUNT = 0.01;
interface GetAcquisitionProps {
  value: number;
  price: number;
  transactionType: TransactionType;
}
export const getAcquisition = ({
  value,
  price,
  transactionType
}: GetAcquisitionProps) => {
  let fee = 0;
  let cryptoAmount = 0;
  let usdAmount = 0;
  if (!value) return { fee, cryptoAmount, usdAmount };

  if (transactionType === TransactionType.buy) {
    fee = getCurrencyFormat(value * FEE_AMOUNT);
    cryptoAmount = getCryptoFormat((value - fee) / price);
    usdAmount = value;
  } else {
    fee = getCurrencyFormat(value * price * FEE_AMOUNT);
    cryptoAmount = value;
    usdAmount = getCurrencyFormat(value * price - fee);
  }
  return { fee, cryptoAmount, usdAmount };
};
