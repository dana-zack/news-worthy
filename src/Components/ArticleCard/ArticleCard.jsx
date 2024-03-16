import './ArticleCard.css';

function ArticleCard({ description, publishedAt, title, urlToImage }) {
  
  const formatDate = () => {
    const dateArray = publishedAt.split('')
    const dayAndMonth = dateArray.splice(5,5).join('')
    const year = dateArray.splice(0, 4).join('')
    return (dayAndMonth + - year)
  }

  return (
    <article className='card'>
      <h2>{title}</h2>
      <img className='card-image' src={urlToImage} alt='corresponding display' />
      <p>{description}</p>
      <p>{formatDate()}</p>
    </article>
  );
}

export default ArticleCard;

