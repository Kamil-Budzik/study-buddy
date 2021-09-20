import React from 'react';
import Note from 'components/molecules/Note/Note';
import { useGetNotesQuery } from 'store';
import {
  NotesWrapper,
  WidgetHandler,
  Wrapper,
} from 'components/organisms/NotesWidget/NotesWidget.styles';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isLoading, data } = useGetNotesQuery();
  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);
  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      <NotesWrapper>
        {data.notes.length ? (
          data.notes.map(({ title, content, id }) => (
            <Note id={id} key={id} title={title} content={content} />
          ))
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;
