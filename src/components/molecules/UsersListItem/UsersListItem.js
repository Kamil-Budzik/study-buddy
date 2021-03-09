import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { UsersContext } from 'providers/UsersProvider';

import { USER_SHAPE } from 'types';

function UsersListItem({ userData: { name, average, attendance = '0%' } }) {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <StyledAverage average={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
}

UsersListItem.propTypes = {
  userData: PropTypes.shape(USER_SHAPE),
};

export default UsersListItem;
