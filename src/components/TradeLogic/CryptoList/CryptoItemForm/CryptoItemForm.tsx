import React from "react";

import { TransactionType } from "../../TradeLogic";
import { HandleInputChangeType } from "../CryptoList";
import {
  StyledTradeForm,
  StyledImg,
  StyledSymbol,
  StyledChange,
  StyledInput,
  StyledAcquisition,
  StyledFee,
  StyledCrypto,
  StyledInfoWrapper,
  StyledAcquisitionWrapper,
  StyledLabel,
  StyledPrice
} from "../cryptoListStyles";
import { ColorType } from "../../../../styles/theme";
import { Button } from "../../../Button/Button";
import { ButtonTypes } from "../../../../styles/button";
import { TradeTransition } from "../../../TradeTransition/TradeTransition";

interface CryptoItemFormProps {
  transactionType: TransactionType;
  handleInputChange: HandleInputChangeType;
  inputValue: string;
  handleTransaction: (e: React.FormEvent) => void;
  acqusition: number;
  fee: number;
  price: number;
  cryptoSymbol: string;
  cryptoIcon: string;
  change24hour: string;
}

const _CryptoItemForm = ({
  handleTransaction,
  handleInputChange,
  cryptoIcon,
  cryptoSymbol,
  price,
  change24hour,
  inputValue,
  transactionType,
  acqusition,
  fee
}: CryptoItemFormProps) => {
  const getColorFee = (fee: number) => {
    if (fee > 0) return ColorType.green;
    else if (fee < 0) return ColorType.red;
  };

  return (
    <StyledTradeForm onSubmit={handleTransaction}>
      <StyledInfoWrapper>
        <StyledCrypto>
          <StyledImg src={cryptoIcon} alt={cryptoIcon}></StyledImg>
          <StyledSymbol>{`${cryptoSymbol} `}</StyledSymbol>
        </StyledCrypto>
        <StyledLabel>
          <TradeTransition
            value={price}
            light={true}
            renderTransitionedElement={transactionType => (
              <StyledPrice transitionType={transactionType}>
                {price} $
              </StyledPrice>
            )}
          ></TradeTransition>
        </StyledLabel>
        <StyledChange color={getColorFee(Number(change24hour))}>
          {change24hour}%
        </StyledChange>
        <StyledInput
          name={cryptoSymbol}
          value={inputValue}
          type="number"
          placeholder={
            transactionType === TransactionType.buy
              ? "USD.."
              : `${cryptoSymbol}..`
          }
          onChange={handleInputChange}
        />
      </StyledInfoWrapper>
      {inputValue ? (
        <StyledAcquisitionWrapper>
          <StyledAcquisition>{`${acqusition} ${
            transactionType === TransactionType.buy ? cryptoSymbol : "usd"
          }`}</StyledAcquisition>
          <StyledFee> {fee}$ fee</StyledFee>
          <StyledLabel>
            <Button buttonType={ButtonTypes.rectangle}>
              {transactionType}
            </Button>
          </StyledLabel>
        </StyledAcquisitionWrapper>
      ) : null}
    </StyledTradeForm>
  );
};

const propsAreEqual = (
  {
    price: prevPrice,
    inputValue: prevInpupValue,
    transactionType: prevTransactionType
  }: CryptoItemFormProps,
  {
    inputValue: nextInpupValue,
    price: nextPrice,
    transactionType: nextTransactionType
  }: CryptoItemFormProps
) =>
  prevPrice === nextPrice &&
  prevInpupValue === nextInpupValue &&
  prevTransactionType === nextTransactionType;

export const CryptoItemForm = React.memo(_CryptoItemForm, propsAreEqual);
