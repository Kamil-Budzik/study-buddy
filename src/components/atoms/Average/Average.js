import styled from 'styled-components';

export const Average = styled.div`
  width: ${({ isBig }) => (isBig ? '50px' : '35px')};
  height: ${({ isBig }) => (isBig ? '50px' : '35px')};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme, isBig }) =>
    isBig ? theme.fontSize.l : theme.fontSize.s};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
`;
