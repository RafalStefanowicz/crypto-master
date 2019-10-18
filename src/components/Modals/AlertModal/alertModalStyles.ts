import styled from "styled-components";

export const StyledAlertText = styled.p`
  font-size: 22px;
  margin: 20px;
  text-align: center;
  color: ${({ theme: { color } }) => color.red};
`;
