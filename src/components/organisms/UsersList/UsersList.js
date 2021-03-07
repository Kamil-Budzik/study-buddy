import React from 'react';

import UsersListsItem from 'components/molecules/UsersListItem/UsersListItem';
import users from 'data/users';
import { Wrapper, StyledList } from './UsersList.styles';

function UsersList() {
  return (
    <Wrapper>
      <StyledList>
        {users.map(userData => (
          <UsersListsItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
}

export default UsersList;
