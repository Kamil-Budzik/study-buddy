import React from 'react';
//components
import Navigation from 'components/organisms/Navigation/Navigation';
import NewsSection from '../NewsSection/NewsSection';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
//styles
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
