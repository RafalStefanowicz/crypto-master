import React, { useState } from "react";
import { connect } from "react-redux";

import { Switcher } from "./Switcher/Switcher";
import { CryptoList } from "./CryptoList/CryptoList";
import { WalletType } from "../../redux/reducers/wallet";
import { CryptosI } from "../../redux/reducers/cryptos";
import { IStore } from "../../redux/reducers";
import { HandleInputChangeType } from "./CryptoList/CryptoList";
import { MODAL_TYPES } from "../../types/MODAL_TYPES";
import { showModal, hideModal } from "../../redux/actions/modalActions";
import { getCurrencyFormat } from "../../utility/getCurrencyFormat";

const FEE_AMOUNT = 0.01;

export enum TransactionType {
  sell = "sell",
  buy = "buy"
}

interface TradeContainerProps {
  wallet: WalletType;
  cryptos: CryptosI;
  showModal: typeof showModal;
}

export type InputValueType = {
  [crypto: string]: number;
};

const _TradeLogic = ({ wallet, cryptos, showModal }: TradeContainerProps) => {
  const [transactionType, setTransactionType] = useState(TransactionType.buy);
  const [inputValue, setInputValue] = useState<InputValueType>({});
  const cryptoSymbol = Object.keys(inputValue)[0];
  let fee = 0;
  let cryptoAmount = 0;
  let usdAmount = 0;

  const getAcqusition = () => {
    // set cryptoAmount , usdAmount  and fee involved to transaction
    const value = inputValue[cryptoSymbol];
    if (!(cryptos && value)) return;
    const price = cryptos[cryptoSymbol].PRICE;
    if (transactionType === TransactionType.buy) {
      fee = getCurrencyFormat(value * FEE_AMOUNT);
      cryptoAmount = Math.floor(((value - fee) / price) * 10000) / 10000;
      usdAmount = value;
    } else {
      fee = getCurrencyFormat(value * price * FEE_AMOUNT);
      cryptoAmount = value;
      usdAmount = getCurrencyFormat(value * price - fee);
    }
  };
  getAcqusition();

  const handleInputChange: HandleInputChangeType = event => {
    const { name, value } = event.currentTarget;
    if (!value) {
      setInputValue({});
    } else {
      setInputValue({ [name]: Number(value) });
    }
  };

  const handleTransaction = (e: React.FormEvent) => {
    e.preventDefault();

    // compute new wallet contents
    const newWallet: WalletType = { ...wallet };
    if (!newWallet) return;

    const usd = newWallet.USD || 0;
    const crypto = newWallet[cryptoSymbol] || 0;
    if (transactionType === TransactionType.buy) {
      newWallet.USD = usd - usdAmount;
      newWallet[cryptoSymbol] = crypto + cryptoAmount;
    } else {
      newWallet.USD = usd + usdAmount;
      newWallet[cryptoSymbol] = crypto - cryptoAmount;

      // remove crypto property from wallet when sold
      if (!newWallet[cryptoSymbol]) delete newWallet[cryptoSymbol];
    }

    // handle transaction in modals
    if (newWallet.USD < 0) {
      showModal({
        modalType: MODAL_TYPES.ALERT,
        modalProps: {
          alertText: `You don't have enough money for this transaction.`
        }
      });
    } else if ((newWallet[cryptoSymbol] as number) < 0) {
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

      setInputValue({});
    }
  };

  const handleSwitch = (TransactionType: TransactionType) => {
    setTransactionType(TransactionType);
    setInputValue({});
  };

  const getCryptosForSell = () => {
    let cryptosForSell: CryptosI = {};
    if (cryptos) {
      for (let prop in wallet) {
        if (prop !== "USD") cryptosForSell[prop] = cryptos[prop];
      }
    }
    return cryptosForSell;
  };

  return (
    <div>
      <Switcher handleSwitch={handleSwitch} />
      <CryptoList
        cryptos={
          transactionType === TransactionType.buy
            ? cryptos
            : getCryptosForSell()
        }
        transactionType={transactionType}
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        handleTransaction={handleTransaction}
        fee={fee}
        acqusition={
          transactionType === TransactionType.buy ? cryptoAmount : usdAmount
        }
      />
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  cryptos: state.cryptos
});

export const TradeLogic = connect(
  mapStateToProps,
  { showModal, hideModal }
)(_TradeLogic) as React.ReactType;
