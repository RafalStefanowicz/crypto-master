import styled from "styled-components";
import { ThemeI } from "../../../styles/theme";
import { device } from "../../../styles/media";

interface StyledUserNameProps {
  theme: ThemeI;
}

export const StyledUserName = styled.h1<StyledUserNameProps>`
  margin: 30px 0 6px;
  text-align: center;
  font-size: 40px;
  color: ${({ theme: { color } }) => color.navyBlue};

  @media ${device.mobileL} {
    font-size: 24px;
  }
`;

export const StyledEmail = styled.p`
  margin: 6px;
  text-align: center;
  font-size: 26px;

  @media ${device.mobileL} {
    font-size: 20px;
  }
`;

export const StyledProviderWrapper = styled.div`
  height: 160px;
`;
