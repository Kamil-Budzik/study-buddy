import React from 'react';

import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from './Button.styles';

function Button(props) {
  return (
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  );
}

export default Button;
