import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 15px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export default function Logo() {
  return (
    <Wrapper>
      <Title>
        Study <br /> Buddy
      </Title>
    </Wrapper>
  );
}
