import React from 'react';
import { useForm } from 'react-hook-form';
import { Switch, Route, Redirect } from 'react-router-dom';
//components
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
//views
import Dashboard from 'views/Dashboard';
//hooks
import { useAuth } from 'hooks/useAuth';
//styles
import { Wrapper } from './Root.styles';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = ({ handleSignIn, loginError }) => {
  const auth = useAuth();
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(auth.signIn)}
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FormField label="login" name="login" id="login" {...register('login')} />
      <FormField
        label="password"
        name="password"
        id="password"
        type="password"
        {...register('password')}
      />
      <Button>Sign in</Button>
    </form>
  );
};

const Root = () => {
  const auth = useAuth();

  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
