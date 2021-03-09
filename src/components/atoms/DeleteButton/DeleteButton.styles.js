import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 22px;
  height: 22px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  margin: 0 10px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
