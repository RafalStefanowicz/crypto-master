import React, { useState } from "react";
import { connect } from "react-redux";

import { Switcher } from "./Switcher/Switcher";
import { CryptoList } from "./CryptoList/CryptoList";
import { WalletType } from "../../redux/reducers/wallet";
import { CryptosI } from "../../redux/reducers/cryptos";
import { IStore } from "../../redux/reducers";
import { HandleInputChangeType } from "./CryptoList/CryptoList";
import { CRYPTO_TYPES } from "../../types/CRYPTO_TYPES";
import { MODAL_TYPES } from "../../types/MODAL_TYPES";
import { showModal, hideModal } from "../../redux/actions/modalActions";
import { getPriceFormat } from "../../utility/getPriceFormat";

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
  [key in CRYPTO_TYPES]?: number;
};

const _TradeLogic = ({ wallet, cryptos, showModal }: TradeContainerProps) => {
  const [transactionType, setTransactionType] = useState(TransactionType.buy);
  const [inputValue, setInputValue] = useState<InputValueType>({});
  const cryptoSymbol = Object.keys(inputValue)[0] as CRYPTO_TYPES;
  let cryptoAmount = 0;
  let usdAmount = 0;

  const getAcqusition = () => {
    // set cryptoAmount and usdAmount involved to transaction
    const value = inputValue[cryptoSymbol];
    if (!(cryptos && value)) return;
    const price = cryptos[cryptoSymbol].PRICE;
    if (transactionType === TransactionType.buy) {
      cryptoAmount = Math.floor((value / price) * 10000) / 10000;
      usdAmount = value;
    } else {
      cryptoAmount = value;
      usdAmount = getPriceFormat(value * price);
    }
  };
  getAcqusition();

  const fee = getPriceFormat(usdAmount * FEE_AMOUNT);

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
    const newWallet = { ...wallet } as WalletType;
    if (!newWallet) return;

    const usd = newWallet.USD || 0;
    const crypto = newWallet[cryptoSymbol] || 0;
    if (transactionType === TransactionType.buy) {
      newWallet.USD = usd - usdAmount - fee;
      newWallet[cryptoSymbol] = crypto + cryptoAmount;
    } else {
      newWallet.USD = usd + usdAmount - fee;
      newWallet[cryptoSymbol] = crypto - cryptoAmount;
    }

    // handle transaction in modals
    if (newWallet.USD < 0) {
      showModal({
        modalType: MODAL_TYPES.ALERT,
        modalProps: {
          alertText: `You don't have enough usd for this transaction. 
            Price including tax is ${usdAmount + fee} usd`
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

  return (
    <div>
      <Switcher handleSwitch={handleSwitch} />
      <CryptoList
        cryptos={cryptos}
        transactionType={transactionType}
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        handleTransaction={handleTransaction}
        acqusition={
          transactionType === TransactionType.buy
            ? cryptoAmount
            : getPriceFormat(usdAmount - fee)
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
