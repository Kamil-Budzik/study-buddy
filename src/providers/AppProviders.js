import { BrowserRouter as Router } from 'react-router-dom';
//styled-components-setup
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

import { ErrorProvider } from 'hooks/useError';
import { AuthProvider } from 'hooks/useAuth';

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ErrorProvider>
          <AuthProvider>
            <GlobalStyle />
            {children}
          </AuthProvider>
        </ErrorProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
