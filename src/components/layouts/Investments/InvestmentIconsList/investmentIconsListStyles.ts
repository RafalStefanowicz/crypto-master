import styled from "styled-components";
import { media } from "../../../../styles/media";

export const StyledIconItem = styled.li``;

export const StyledIconsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px auto;

  @media ${media.small} {
    justify-content: left;
    margin: 6px auto;
  }
`;

export const StyledIconImg = styled.img`
  margin: 5px 10px;
  width: 40px;
  height: 40px;
  filter: opacity(40%);

  :hover {
    filter: none;
    cursor: pointer;
  }

  @media ${media.small} {
    margin: 3px 5px;
    width: 32px;
    height: 32px;
  }
`;
