import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  padding: 15px 0;
`;

export default function NavItem({ path, text }) {
  return (
    <StyledLink as={Link} to={'/' + path}>
      {text}
    </StyledLink>
  );
}
