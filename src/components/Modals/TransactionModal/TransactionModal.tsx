import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { Modal } from "../Modal/Modal";
import { hideModal } from "../../../redux/actions/modalActions";
import { WalletType } from "../../../redux/reducers/wallet";
import { FirebaseOperations } from "../../../firebase/FirebaseOperations";
import { withFirebase } from "../../../firebase/withFirebase";
import { getInvestmentAfterTransaction } from "../../../utility/getInvestmentAfterTransaction";
import { TransactionType } from "../../TradeLogic/TradeLogic";
import { InvestmentsI } from "../../../types/InvestmentsInterfaces";

interface TransactionModalProps {
  newWallet: WalletType;
  transactionType: TransactionType;
  cryptoAmount: number;
  usdAmount: number;
  cryptoSymbol: string;
  fee: number;
  firebase: FirebaseOperations;
  hideModal: typeof hideModal;
}

const _TransactionModal = ({
  newWallet,
  transactionType,
  cryptoAmount,
  usdAmount,
  fee,
  cryptoSymbol,
  firebase,
  hideModal
}: TransactionModalProps) => {
  // time for modal on screen
  const [timeLeft, setTimeLeft] = useState(10);

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
    <Modal>
      <>
        <h1>{timeLeft}</h1>
        <span>{`Do you want to ${transactionType} `}</span>
        <span>{cryptoAmount} </span>
        <span>{cryptoSymbol} </span>
        <span>for </span>
        <span>{usdAmount} $ </span>
        <span>?</span>
        <p>{`Fee included: ${fee} $`}</p>
        <button onClick={handleAccept}>{transactionType}</button>
      </>
    </Modal>
  );
};

export const TransactionModal = compose(
  withFirebase,
  connect(
    null,
    { hideModal }
  )
)(_TransactionModal) as React.ReactType;
