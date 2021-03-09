import React, { useContext } from 'react';
import { UsersContext } from 'providers/UsersProvider';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';

function Dashboard() {
  const { users } = useContext(UsersContext);

  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
}

export default Dashboard;
