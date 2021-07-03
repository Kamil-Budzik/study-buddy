import React from 'react';
import Note from 'components/molecules/Note/Note';
import { useSelector } from 'react-redux';
import {
  NotesWrapper,
  WidgetHandler,
  Wrapper,
} from 'components/organisms/NotesWidget/NotesWidget.styles';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      <NotesWrapper>
        <Note
          id={'1'}
          key={'1'}
          title={'title'}
          content={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quas inventore ducimus laboriosam reprehenderit cumque facilis quasi beatae distinctio eaque, atque impedit temporibus quos corrupti officiis. Fuga deleniti eveniet quia.'
          }
        />
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;
