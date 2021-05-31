import React from 'react';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  background-color: white;
  padding: 20px 25px 15px;
  color: ${({ theme }) => theme.colors.error};
  border: 2px solid ${({ theme }) => theme.colors.error};
  border-radius: 15px;

  ${Title} {
    color: ${({ theme }) => theme.colors.error};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.error};
    width: 60px;
    height: 5px;
    border-radius: 50px;
  }

  &::before {
    opacity: 0.5;
  }

  &::after {
    transform: translateX(-50%) scaleX(1);
    transform-origin: left top;
  }
`;

const ErrorMessage = () => {
  return (
    <Wrapper>
      <Title>Oops!</Title>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
    </Wrapper>
  );
};

export default ErrorMessage;
