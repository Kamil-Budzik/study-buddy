import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { StyledTitle } from 'components/atoms/Title/Title';

import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { UsersContext } from 'views/Root';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

function AddUser() {
  const [formValues, setFormValues] = useState(initialFormState);
  const context = useContext(UsersContext);

  const handleInputChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = e => {
    e.preventDefault();
    context.handleAddUser(formValues);
    setFormValues(initialFormState);
  };

  return (
    <ViewWrapper as='form' onSubmit={handleSubmitUser}>
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
    </ViewWrapper>
  );
}

export default AddUser;
