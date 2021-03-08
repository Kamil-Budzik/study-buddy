import React, { useState } from 'react';
import UsersListsItem from 'components/molecules/UsersListItem/UsersListItem';
import usersData from 'data/users';
import { Wrapper, StyledList } from './UsersList.styles';

function UsersList() {
  const [users, setUsers] = useState(usersData);

  const deleteUser = name => {
    const filteredUsers = users.filter(user => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
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
