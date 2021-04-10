//comppnents
import { Button } from 'components/atoms/Button/Button';
//styles
import { Wrapper, ArticleWrapper, NewsSectionHeader, TitleWrapper } from './NewsSection.styles';

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      <ArticleWrapper>
        <TitleWrapper>
          <h3>Lorem ipsum</h3>
          <p>Tech news</p>
        </TitleWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum vel officia obcaecati! Quas quis ad, culpa deserunt accusantium possimus
          magni saepe asperiores sed dolores, ipsam fugit voluptates minima mollitia.
        </p>
        <Button isBig>click me</Button>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default NewsSection;
