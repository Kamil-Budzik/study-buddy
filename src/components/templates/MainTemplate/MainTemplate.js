import React from 'react';
//components
import Navigation from 'components/organisms/Navigation/Navigation';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
//styles
import { Wrapper, News } from 'components/templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <News>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
      </News>
    </Wrapper>
  );
};

export default MainTemplate;
