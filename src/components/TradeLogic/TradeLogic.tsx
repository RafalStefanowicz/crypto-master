import React, { useState } from "react";
import { connect } from "react-redux";

import { CryptoList } from "./CryptoList/CryptoList";
import { WalletI } from "../../redux/reducers/wallet";
import { CryptosI, FetchedCryptosI } from "../../redux/reducers/cryptos";
import { HandleInputChangeType } from "./CryptoList/CryptoList";
import { MODAL_TYPES } from "../../types/MODAL_TYPES";
import { showModal, hideModal } from "../../redux/actions/modalActions";
import { createNewWallet } from "../../utility/createNewWallet";
import { handleTransactionInModalsApprove } from "../../utility/handleTransactionInModalsApprove";
import { getAcquisition } from "../../utility/getAcquisition";
import {
  StyledStockLabel,
  StyledTradeWrapper,
  StyledSwitchWrapper
} from "../layouts/Stock/stockStyles";
import { SwitchButtons } from "../layouts/Investments/InvestmentSwitcher/SwitchButtons/SwitchButtons";

const MAX_TRANSACTION_AMOUNT = 20000;

export enum TransactionType {
  sell = "sell",
  buy = "buy"
}

interface TradeContainerProps {
  wallet: WalletI;
  cryptos: FetchedCryptosI;
  showModal: typeof showModal;
}

export type InputValueType = {
  [crypto: string]: string;
};

const _TradeLogic = ({ wallet, cryptos, showModal }: TradeContainerProps) => {
  const [transactionType, setTransactionType] = useState(TransactionType.buy);
  const [inputValue, setInputValue] = useState<InputValueType>({});

  const cryptoSymbol = Object.keys(inputValue)[0];
  const value = Number(inputValue[cryptoSymbol]);

  const price = cryptoSymbol ? cryptos[cryptoSymbol].PRICE : 0;

  const { fee, cryptoAmount, usdAmount } = getAcquisition({
    value,
    price,
    transactionType
  });

  const handleInputChange: HandleInputChangeType = event => {
    const { name, value } = event.currentTarget;
    if (value === "") return setInputValue({});

    let error = false;
    if (transactionType === TransactionType.buy) {
      error = Number(value) > MAX_TRANSACTION_AMOUNT;
    } else {
      error = Number(value) * cryptos[name].PRICE > MAX_TRANSACTION_AMOUNT;
    }

    if (error) {
      showModal({
        modalType: MODAL_TYPES.ALERT,
        modalProps: {
          alertText: `Maximum transaction is ${MAX_TRANSACTION_AMOUNT} USD`
        }
      });
      return;
    }

    setInputValue({ [name]: value });
  };

  const handleTransaction = (e: React.FormEvent) => {
    e.preventDefault();

    const newWallet = createNewWallet({
      wallet,
      cryptoSymbol,
      transactionType,
      usdAmount,
      cryptoAmount
    });

    // handle transaction in modals
    const transactionApproved = handleTransactionInModalsApprove({
      showModal,
      newWallet,
      cryptoAmount,
      cryptoSymbol,
      transactionType,
      fee,
      usdAmount
    });

    transactionApproved && setInputValue({});
  };

  const handleSwitch = (isBuyActive: boolean) => () => {
    setTransactionType(
      isBuyActive ? TransactionType.buy : TransactionType.sell
    );
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
    <StyledTradeWrapper>
      <StyledStockLabel>Stock</StyledStockLabel>
      <StyledSwitchWrapper>
        <SwitchButtons
          leftActive={transactionType === TransactionType.buy}
          leftText="Buy"
          rightText="Sell"
          changeActive={handleSwitch}
        />
      </StyledSwitchWrapper>
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
    </StyledTradeWrapper>
  );
};

export const TradeLogic = connect(
  null,
  { showModal, hideModal }
)(_TradeLogic) as React.ReactType;
