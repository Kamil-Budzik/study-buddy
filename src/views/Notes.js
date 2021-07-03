import React from 'react';
//styles
import { Button } from 'components/atoms/Button/Button';
import {
  Wrapper,
  FormWrapper,
  StyledFormField,
  NotesWrapper,
} from './Notes.styles';
import Note from 'components/molecules/Note/Note';

const Notes = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <StyledFormField label="Title" name="title" id="title" />
        <StyledFormField
          isTextarea
          label="Content"
          name="content"
          id="content"
        />
        <Button onClick={() => console.log('siema')}>Add</Button>
      </FormWrapper>
      <NotesWrapper>
        <Note
          id="1"
          key="1"
          title="Title"
          content="lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum doorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor"
        />
        <Note
          id="2"
          key="2"
          title="Title"
          content="lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipolor lorem ipsum dolor lorem ipsum dolor"
        />
        <Note
          id="3"
          key="3"
          title="Title"
          content="lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor"
        />
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
