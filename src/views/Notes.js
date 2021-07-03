import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//styles
import { Button } from 'components/atoms/Button/Button';
import {
  Wrapper,
  FormWrapper,
  StyledFormField,
  NotesWrapper,
} from './Notes.styles';
import Note from 'components/molecules/Note/Note';
import { addNote } from 'store';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(
      addNote({
        title: 'New Note',
        content: 'Lorem ipsum dolor sit amet dolon solonez',
      })
    );
  };

  return (
    <Wrapper>
      {console.log(notes)}
      <FormWrapper>
        <StyledFormField label="Title" name="title" id="title" />
        <StyledFormField
          isTextarea
          label="Content"
          name="content"
          id="content"
        />
        <Button onClick={handleAddNote}>Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => (
            <Note key={id} id={id} title={title} content={content} />
          ))
        ) : (
          <p>No notes so far</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
