import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { TransactionModal } from "./TransactionModal/TransactionModal";
import { hideModal } from "../../../redux/actions/modalActions";
import { WalletType } from "../../../redux/reducers/wallet";
import { FirebaseOperations } from "../../../firebase/FirebaseOperations";
import { withFirebase } from "../../../firebase/withFirebase";
import { getInvestmentAfterTransaction } from "../../../utility/getInvestmentAfterTransaction";
import { TransactionType } from "../../TradeLogic/TradeLogic";
import { InvestmentsI } from "../../../types/InvestmentsInterfaces";

interface TransactionModalLogicProps {
  newWallet: WalletType;
  transactionType: TransactionType;
  cryptoAmount: number;
  usdAmount: number;
  cryptoSymbol: string;
  fee: number;
  firebase: FirebaseOperations;
  hideModal: typeof hideModal;
}

const _TransactionModalLogic = ({
  newWallet,
  transactionType,
  cryptoAmount,
  usdAmount,
  fee,
  cryptoSymbol,
  firebase,
  hideModal
}: TransactionModalLogicProps) => {
  // time for modal on screen
  const [timeLeft, setTimeLeft] = useState(10);

  // set counting
  useEffect(() => {
    const listener = setInterval(() => {
      setTimeLeft(timeLeft => {
        return timeLeft - 1;
      });
    }, 1000);
    return () => {
      clearInterval(listener);
    };
  }, []);

  const handleAccept = async () => {
    const userId = firebase.getUserId();

    if (userId) {
      const investments = await firebase.getInvestments(userId, cryptoSymbol);
      const investmentsAfterTransaction: InvestmentsI = getInvestmentAfterTransaction(
        {
          transactionType,
          investments,
          cryptoSymbol,
          cryptoAmount,
          usdAmount
        }
      );
      firebase.investmentsDb(userId).set(investmentsAfterTransaction);

      firebase
        .walletDb(userId)
        .set(newWallet)
        .then(() => {
          hideModal();
        });
    }
  };

  if (timeLeft < 0) {
    hideModal();
  }

  return (
    <TransactionModal
      timeLeft={timeLeft}
      transactionType={transactionType}
      cryptoAmount={cryptoAmount}
      cryptoSymbol={cryptoSymbol}
      usdAmount={usdAmount}
      fee={fee}
      handleAccept={handleAccept}
    />
  );
};

export const TransactionModalLogic = compose(
  withFirebase,
  connect(
    null,
    { hideModal }
  )
)(_TransactionModalLogic) as React.ReactType;
