import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './UsersListItem.styles';
import Button from 'components/atoms/Button/Button';

function UsersListItem({ userData: { name, average, attendance = '0%' } }) {
  return (
    <Wrapper>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </div>
      <Button />
    </Wrapper>
  );
}

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
