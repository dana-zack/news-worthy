import './Articles.css';
import ArticleCard from '../ArticleCard/ArticleCard';
// import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Articles( { articles }) {

  const articleCards = articles.map(article => {
    return <ArticleCard
      author={article.author}
      content={article.content}
      description={article.description}
      publishedAt={article.publishedAt}
      source={article.source}
      title={article.title}
      url={article.url}
      urlToImage={article.urlToImage}
      id={uuidv4()}
      key={uuidv4()}
    />
  })

  return (
    <section>
      {articleCards}
    </section>
  );
}

export default Articles;