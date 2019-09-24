import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { Modal } from "../Modal/Modal";
import { hideModal } from "../../../redux/actions/modalActions";
import { WalletType } from "../../../redux/reducers/wallet";
import { Firebase } from "../../../firebase/Firebase";
import { withFirebase } from "../../../firebase/withFirebase";

import { TransactionType } from "../../TradeLogic/TradeLogic";

interface TransactionModalProps {
  newWallet: WalletType;
  transactionType: TransactionType;
  cryptoAmount: number;
  usdAmount: number;
  cryptoSymbol: string;
  fee: number;
  firebase: Firebase;
  hideModal: typeof hideModal;
}

const _TransactionModal = ({
  newWallet,
  transactionType,
  cryptoAmount,
  usdAmount,
  cryptoSymbol,
  firebase,
  hideModal,
  fee
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

  const handleAccept = () => {
    const userId = firebase.getUserId();
    if (userId) {
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
        <span>{usdAmount} USD </span>
        <span>?</span>
        <p>{`Fee: ${fee} USD`}</p>
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
