import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddNote = ({ title, content }) => {
    dispatch(
      addNote({
        title,
        content,
      })
    );
  };

  return (
    <Wrapper>
      {console.log(notes)}
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField
          {...register('title', { required: true })}
          label="Title"
          name="title"
          id="title"
        />
        <StyledFormField
          {...register('content', { required: true })}
          isTextarea
          label="Content"
          name="content"
          id="content"
        />
        {errors.title && <span>Title is required</span>}
        {errors.content && <span>Content is required</span>}
        <Button type="submit">Add</Button>
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
