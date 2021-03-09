import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/globalStyle.js';

import Navigation from 'components/organisms/Navigation/Navigation';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';

import UsersProvider from 'providers/UsersProvider';

import { Wrapper } from './Root.styles';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UsersProvider>
          <Wrapper>
            <Navigation />
            <Switch>
              <Route path='/add-user'>
                <AddUser />
              </Route>
              <Route path='/'>
                <Dashboard />
              </Route>
            </Switch>
          </Wrapper>
        </UsersProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
