import React from 'react';
import PropTypes from 'prop-types';

import UsersListsItem from 'components/molecules/UsersListItem/UsersListItem';

import { StyledList } from './UsersList.styles';

import { StyledTitle } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';

import { USER_SHAPE } from 'types/index';

function UsersList({ users }) {
  return (
    <ViewWrapper>
      <StyledTitle>Students list</StyledTitle>
      <StyledList>
        {users.map(userData => (
          <UsersListsItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </ViewWrapper>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(USER_SHAPE)),
  deleteUser: PropTypes.func,
};

export default UsersList;
