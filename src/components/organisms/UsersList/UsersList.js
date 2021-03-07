import React from 'react';
import styled from 'styled-components';

import UsersListsItem from 'components/molecules/UsersListItem/UsersListItem';
import users from 'data/users';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

function UsersList() {
  return (
    <Wrapper>
      <ul>
        {users.map(userData => (
          <UsersListsItem key={userData.name} userData={userData} />
        ))}
      </ul>
    </Wrapper>
  );
}

export default UsersList;
