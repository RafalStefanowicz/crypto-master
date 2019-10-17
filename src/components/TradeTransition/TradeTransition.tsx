import React, { useRef, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { TransitionTypes } from "../../types/TransitionTypes";

interface TradeTransitionProps {
  value: any;
  renderTransitionedElement: (transitionType?: TransitionTypes) => JSX.Element;
  light: boolean;
}

export const TradeTransition = ({
  value,
  renderTransitionedElement,
  light
}: TradeTransitionProps) => {
  const prevValue = useRef<number>();

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const getTransactionType = () => {
    if (!prevValue.current || !value) return;
    if (prevValue.current === value) return;

    if (light)
      return value > prevValue.current
        ? TransitionTypes.lightGreen
        : TransitionTypes.lightRed;

    return value > prevValue.current
      ? TransitionTypes.green
      : TransitionTypes.red;
  };

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        classNames="trade-item"
        timeout={{ enter: 2000 }}
        exit={false}
        key={value}
      >
        {renderTransitionedElement(getTransactionType())}
      </CSSTransition>
    </TransitionGroup>
  );
};

TradeTransition.defaultProps = {
  light: false
};
