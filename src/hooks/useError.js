import React, { useState, useCallback, createContext, useContext } from 'react';

const ErrorContext = createContext({});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const dispatchError = useCallback((message) => setError(message), []);

  return (
    <div>
      <ErrorContext.Provider value={{ error, dispatchError }}>
        {children}
      </ErrorContext.Provider>
    </div>
  );
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);
  if (!errorContext) {
    throw Error('UseError needs to be used inside ErrorContext');
  }
  return errorContext;
};
