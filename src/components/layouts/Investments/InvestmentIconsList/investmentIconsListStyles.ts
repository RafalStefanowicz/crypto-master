import styled from "styled-components";
import { media } from "../../../../styles/media";

export const StyledIconItem = styled.li``;
export const StyledIconsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px auto;

  @media ${media.small} {
    justify-content: left;
  }
`;

export const StyledIconImg = styled.img`
  margin: 5px 10px;
  filter: opacity(40%);

  :hover {
    filter: none;
    cursor: pointer;
  }

  @media ${media.small} {
    margin: 3px 5px;
  }
`;
