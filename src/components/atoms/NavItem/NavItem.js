import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active-link';
// const StyledLink = styled(NavLink).attrs({
//   activeClassName: activeClassName,
//   exact: true,
// })`
//   display: block;
//   width: 100%;
//   text-align: center;
//   text-decoration: none;
//   color: ${({ theme }) => theme.colors.darkGrey};
//   font-size: ${({ theme }) => theme.fontSize.m};
//   font-weight: bold;
//   padding: 15px 0;
// /*
//   &.${activeClassName} {
//     color: red;
//   } */

// `;

export const StyledLink = styled(NavLink).attrs({
  activeClassName,
  exact: true,
})`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;
  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;

export default function NavItem({ path, text }) {
  return <StyledLink to={'/' + path}>{text}</StyledLink>;
}
