import React from 'react';
import UsersListsItem from 'components/UsersListItem/UsersListItem';
import users from 'data/users';

function UsersList() {
  return (
    <div>
      <ul>
        {users.map(userData => (
          <UsersListsItem userData={userData} />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
