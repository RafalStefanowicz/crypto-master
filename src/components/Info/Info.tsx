import React from "react";

import { StyledInfo } from "../../styles/infoStyles";

export const Info = ({ infoText }: { infoText: string }) => (
  <StyledInfo>{infoText}</StyledInfo>
);
