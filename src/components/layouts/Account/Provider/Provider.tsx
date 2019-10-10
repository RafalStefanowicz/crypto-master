import React from "react";

import {
  ProviderWrapper,
  ProviderLabel,
  ProviderImage
} from "./providerStyles";
import facebookImg from "../../../../assets/images/facebook.png";
import googleImg from "../../../../assets/images/google.png";

interface ProviderProps {
  provider: string;
}

export const Provider = ({ provider }: ProviderProps) => {
  const isGoogleProvider = provider === "google.com";

  return (
    <ProviderWrapper>
      <ProviderLabel>logged by</ProviderLabel>
      <ProviderImage
        src={isGoogleProvider ? googleImg : facebookImg}
        alt={isGoogleProvider ? "google.com" : "facebook.com"}
      />
    </ProviderWrapper>
  );
};
