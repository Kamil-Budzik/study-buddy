import React from 'react';
import UsersListsItem from 'components/molecules/UsersListItem/UsersListItem';

import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';

function UsersList({ deleteUser, users }) {
  return (
    <Wrapper>
      <StyledTitle>Students list</StyledTitle>
      <StyledList>
        {users.map(userData => (
          <UsersListsItem
            deleteUser={deleteUser}
            key={userData.name}
            userData={userData}
          />
        ))}
      </StyledList>
    </Wrapper>
  );
}

export default UsersList;
