import { useState, useEffect } from 'react';
import axios from 'axios';
//components
import { Button } from 'components/atoms/Button/Button';
//styles
import { Wrapper, ArticleWrapper, NewsSectionHeader, TitleWrapper, ContentWrapper } from './NewsSection.styles';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `{
  allArticles {
    title
    category
    content
    image {
      url
      alt
    }
  }
}`,
        },
        { headers: { authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}` } }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => setError("Sorry, we couldn't load articles for you"));
  }, []);
  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {articles.length > 0 && !error
        ? articles.map(({ title, category, content, image = null }) => (
            <ArticleWrapper key={title}>
              <TitleWrapper>
                <h3>{title}</h3>
                <p>{category}</p>
              </TitleWrapper>
              <ContentWrapper>
                <p>{content}</p>
                {image && <img src={image.url} alt={image.alr} />}
              </ContentWrapper>
              <Button isBig>click me</Button>
            </ArticleWrapper>
          ))
        : !error && <NewsSectionHeader>Loading...</NewsSectionHeader>}
      {error && <NewsSectionHeader>{error}</NewsSectionHeader>}
    </Wrapper>
  );
};

export default NewsSection;
