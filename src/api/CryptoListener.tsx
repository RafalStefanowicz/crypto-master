import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCryptosAction } from "../redux/actions/fetchCryptosAction";
import { FETCH_CRYPTO_TIME } from "../constants/FETCH_CRYPTO_TIME";

interface CryptoListenerProps {
  fetchCryptosAction: typeof fetchCryptosAction;
}
const _CryptoListener = ({ fetchCryptosAction }: any) => {
  useEffect(() => {
    fetchCryptosAction();
    const listener = setInterval(() => {
      fetchCryptosAction();
    }, FETCH_CRYPTO_TIME);

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
