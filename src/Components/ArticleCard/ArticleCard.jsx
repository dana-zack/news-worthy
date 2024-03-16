import './ArticleCard.css';

function ArticleCard({ description, publishedAt, title, urlToImage, formatDate }) {
  


  return (
    <article className='card'>
      <h2>{title}</h2>
      <img className='card-image' src={urlToImage} alt='corresponding display' />
      <p>{description}</p>
      <p>{formatDate(publishedAt)}</p>
    </article>
  );
}

export default ArticleCard;

