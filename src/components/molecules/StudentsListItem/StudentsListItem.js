import React from 'react';
import PropTypes from 'prop-types';
//components
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Average } from 'components/atoms/Average/Average';
//types
import { UserShape } from 'types';
//styles
import { StyledInfo, Wrapper } from './StudentsListItem.styles';

const StudentsListItem = ({
  userData: { average, name, attendance = '0%' },
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;
