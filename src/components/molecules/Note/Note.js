import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import {
  NoteWrapper,
  StyledDeleteButton,
} from 'components/molecules/Note/Note.styles';
import { useDispatch } from 'react-redux';
import { removeNote } from 'store';

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeNote({ id }));
  };
  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton onClick={handleRemove} />
    </NoteWrapper>
  );
};

export default Note;
