import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px;
  }
`;

function FormField({
  value,
  onChange,
  name,
  id,
  type = 'text',
  label,
  ...props
}) {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
}

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default FormField;
