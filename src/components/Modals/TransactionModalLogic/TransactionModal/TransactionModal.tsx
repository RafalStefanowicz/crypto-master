import React from "react";

import { Modal } from "../../Modal/Modal";
import { TransactionType } from "../../../TradeLogic/TradeLogic";
import {
  StyledTransactionModal,
  StyledTime,
  StyledAcqusitionQuestion,
  StyledFeeInfo,
  StyledButtonWrapper,
  StyledImportant
} from "./transactionModalStyles";
import { SubmitButton } from "../../../Form/SubmitButton/SubmitButton";

interface TransactionModalProps {
  transactionType: TransactionType;
  cryptoAmount: number;
  usdAmount: number;
  cryptoSymbol: string;
  fee: number;
  timeLeft: number;
  handleAccept: () => void;
  isSubmitting: boolean;
}

export const TransactionModal = ({
  timeLeft,
  transactionType,
  cryptoAmount,
  cryptoSymbol,
  usdAmount,
  fee,
  isSubmitting,
  handleAccept
}: TransactionModalProps) => {
  return (
    <Modal>
      <StyledTransactionModal>
        <StyledTime>{timeLeft}</StyledTime>
        <StyledAcqusitionQuestion>
          <span>{`Do you want to ${transactionType} `}</span>
          <StyledImportant>{`${cryptoAmount} ${cryptoSymbol} `}</StyledImportant>
          <span>for </span>
          <StyledImportant>{usdAmount} $</StyledImportant>
          <span>?</span>
        </StyledAcqusitionQuestion>
        <StyledFeeInfo>{`Fee included: ${fee} $`}</StyledFeeInfo>
        <StyledButtonWrapper>
          <SubmitButton
            text={transactionType}
            submitting={isSubmitting}
            disabled={isSubmitting}
            handleSubmit={handleAccept}
          ></SubmitButton>
        </StyledButtonWrapper>
      </StyledTransactionModal>
    </Modal>
  );
};
