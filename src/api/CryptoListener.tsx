import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCryptosAction } from "../redux/actions/fetchCryptosAction";

interface CryptoListenerProps {
  fetchCryptosAction: typeof fetchCryptosAction;
}
const _CryptoListener = ({ fetchCryptosAction }: any) => {
  useEffect(() => {
    fetchCryptosAction();
    const listener = setInterval(() => {
      fetchCryptosAction();
    }, 10000);

    return () => {
      clearInterval(listener);
    };
  }, [fetchCryptosAction]);

  return <></>;
};

export const CryptoListener = connect(
  null,
  { fetchCryptosAction }
)(_CryptoListener);
