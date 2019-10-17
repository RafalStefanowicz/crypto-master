import styled from "styled-components";

export const StyledTime = styled.p`
  margin: 20px;
  font-size: ${({ theme: { fontSize } }) => fontSize.largeP};
  font-weight: bold;
`;

export const StyledTransactionModal = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.smallP};
`;

export const StyledAcqusitionQuestion = styled.p`
  margin: 20px 0 10px;
`;

export const StyledFeeInfo = styled.p`
  font-size: 18px;
`;

export const StyledButtonWrapper = styled.div`
  margin: 20px;
`;

export const StyledImportant = styled.span`
  color: ${({ theme: { color } }) => color.green};
`;
