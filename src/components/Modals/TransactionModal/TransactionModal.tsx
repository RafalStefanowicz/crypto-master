import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { Modal } from "../Modal/Modal";
import { hideModal } from "../../../redux/actions/modalActions";
import { WalletType } from "../../../redux/reducers/wallet";
import { FirebaseOperations } from "../../../firebase/FirebaseOperations";
import { withFirebase } from "../../../firebase/withFirebase";

import { TransactionType } from "../../TradeLogic/TradeLogic";

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

      if (transactionType === TransactionType.buy) {
        investments.now[cryptoSymbol][Date.now()] = {
          cryptoAmount,
          buyPrice: Math.floor(((usdAmount + fee) / cryptoAmount) * 100) / 100
        };
      }
      await firebase.investmentsDb(userId).set(investments);

      const past = investments.past[cryptoSymbol];
      const now = investments.now[cryptoSymbol];

      if (transactionType === TransactionType.sell) {
        const times: any = Object.keys(now).sort();
        let amount = cryptoAmount;
        let sellTime = Date.now();

        for (let i = 0; amount > 0; i++) {
          const buyCryptoAmount = now[times[i]].cryptoAmount;
          const buyPrice = now[times[i]].buyPrice;

          const sellPrice = (usdAmount - fee) / cryptoAmount;

          const roi = sellPrice / buyPrice;
          let sellCryptoAmount = 0;

          if (buyCryptoAmount > amount) {
            sellCryptoAmount = amount;
            now[times[i]].cryptoAmount = buyCryptoAmount - amount;
            amount -= buyCryptoAmount;
          } else if (buyCryptoAmount <= amount) {
            sellCryptoAmount = buyCryptoAmount;
            now[times[i]] = {};
            amount -= buyCryptoAmount;
          }

          sellTime += 1;
          past[sellTime] = {
            buyTime: times[i],
            sellTime: sellTime,
            sellCryptoAmount,
            buyPrice,
            sellPrice,
            roi
          };
        }
      }
      await firebase.investmentsDb(userId).set(investments);

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
        <p>{`Fee: ${fee} $`}</p>
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
