import './Articles.css';
import ArticleCard from '../ArticleCard/ArticleCard';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function Articles({ articles, setStory, formatDate }) {
  
  if (!articles.length) {
    return <p className='loading-msg'>Loading...</p>;
  }

  const articleCards = articles.map(article => {
    return (
      <Link onClick={() => setStory(article)} to={`/article/${article.title}`}>
        <ArticleCard
          author={article.author}
          content={article.content}
          description={article.description}
          publishedAt={article.publishedAt}
          source={article.source}
          title={article.title}
          url={article.url}
          urlToImage={article.urlToImage}
          formatDate={formatDate}
          id={uuidv4()}
          key={uuidv4()}
        />
      </Link>
    );
  });

  return (
    <section>
      {articleCards}
    </section>
  );
};

export default Articles;