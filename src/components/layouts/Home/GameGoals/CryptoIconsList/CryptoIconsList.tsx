import React from "react";

import { StyledIconsList, StyledIconItem } from "./cryptoIconsListStyle";
import { CryptoIconI } from "../../../../../constants/cryptoIcons";

interface CryptoIconsListProps {
  iconsList: CryptoIconI[];
}

export default function CryptoIconsList({ iconsList }: CryptoIconsListProps) {
  const renderIcons = () =>
    iconsList.map(icon => {
      const crypto = Object.keys(icon)[0];
      return (
        <StyledIconItem key={crypto}>
          <img src={icon[crypto]} alt={crypto}></img>
        </StyledIconItem>
      );
    });

  return <StyledIconsList>{renderIcons()}</StyledIconsList>;
}
