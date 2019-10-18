import styled from "styled-components";
import { media } from "../../../styles/media";

export const StyledGoalsList = styled.ul``;

export const StyledGoalItem = styled.li`
  margin-bottom: 30px;
  text-align: center;
`;

export const StyledHomeWrapper = styled.div`
  padding-top: 20px;
  font-size: 22px;

  @media ${media.small} {
    font-size: 16px;
  }
`;

export const StyledGoal = styled.p`
  margin: 5px;
`;
