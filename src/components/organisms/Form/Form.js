import React from 'react';
import {
  Wrapper,
  StyledTitle,
} from 'components/organisms/UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

function Form({ handleAddUser, formValues, handleInputChange }) {
  return (
    <Wrapper as='form' onSubmit={handleAddUser}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField
        value={formValues.name}
        onChange={handleInputChange}
        label='Name'
        id='name'
        name='name'
      />
      <FormField
        value={formValues.attendance}
        onChange={handleInputChange}
        label='Attendance'
        id='attendance'
        name='attendance'
      />
      <FormField
        value={formValues.average}
        onChange={handleInputChange}
        label='Average'
        id='average'
        name='average'
      />
      <Button type='submit'>Add</Button>
    </Wrapper>
  );
}

export default Form;
