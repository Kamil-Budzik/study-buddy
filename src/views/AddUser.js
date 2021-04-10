import React, { useReducer, useContext } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';
import { useWindowHeight } from 'hooks/useWindowsSize';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const actionTypes = {
  INPUT_CHANGE: 'INPUT_CHANGE',
  CLEAR_VALUES: 'CLEAR_VALUES',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case actionTypes.CLEAR_VALUES:
      return initialFormState;
    default:
      return state;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const { handleAddUser } = useContext(UsersContext);
  const dimension = useWindowHeight();

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.INPUT_CHANGE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    dispatch({ type: actionTypes.CLEAR_VALUES });
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <Title>{dimension.width}</Title>
      <Title>{dimension.height}</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
