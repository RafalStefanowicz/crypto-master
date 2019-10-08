import { MODAL_TYPES } from "../types/MODAL_TYPES";
import { showModal } from "../redux/actions/modalActions";
import { WalletI } from "../redux/reducers/wallet";
import { TransactionType } from "../components/TradeLogic/TradeLogic";

interface handleTransactionInModalsApproveProps {
  showModal: typeof showModal;
  newWallet: WalletI;
  cryptoAmount: number;
  cryptoSymbol: string;
  transactionType: TransactionType;
  fee: number;
  usdAmount: number;
}

export const handleTransactionInModalsApprove = ({
  showModal,
  newWallet,
  cryptoAmount,
  cryptoSymbol,
  transactionType,
  fee,
  usdAmount
}: handleTransactionInModalsApproveProps) => {
  if (newWallet.USD < 0) {
    showModal({
      modalType: MODAL_TYPES.ALERT,
      modalProps: {
        alertText: `You don't have enough money for this transaction.`
      }
    });
  } else if (newWallet[cryptoSymbol] < 0) {
    showModal({
      modalType: MODAL_TYPES.ALERT,
      modalProps: {
        alertText: `You dont have ${cryptoAmount} ${cryptoSymbol} !`
      }
    });
  } else {
    showModal({
      modalType: MODAL_TYPES.TRANSACTION,
      modalProps: {
        newWallet,
        transactionType,
        cryptoAmount,
        fee,
        usdAmount,
        cryptoSymbol
      }
    });
    return true;
  }
};
