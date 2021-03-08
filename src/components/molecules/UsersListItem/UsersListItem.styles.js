import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const StyledAverage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${({ average, theme }) => {
    if (average > 4) return theme.colors.success;
    if (average > 3) return theme.colors.warning;
    if (average > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: 25px 20px;

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
