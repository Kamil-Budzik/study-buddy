import React, { useEffect } from 'react';
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
import { useGetNotesQuery, useAddNoteMutation } from 'store';

const Notes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isLoading, data } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();
  const handleAddNote = ({ title, content }) => {
    console.log(title, content);
    addNote({
      title,
      content,
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Wrapper>
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
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ title, content, id }) => (
              <Note key={id} id={id} title={title} content={content} />
            ))
          ) : (
            <p>No notes so far</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default Notes;
