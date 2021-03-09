import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';

import Logo from 'components/atoms/Logo/Logo';
import NavItem from 'components/atoms/NavItem/NavItem';

const Wrapper = styled.div`
  width: 110px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 30px 0;
`;

function Navigation() {
  return (
    <Wrapper>
      <Logo />
      <NavItem path='add-user' text='Add-user' />
      <NavItem path='' text='Home' />
    </Wrapper>
  );
}

// Navigation.propTypes = {
//
// }

export default Navigation;
