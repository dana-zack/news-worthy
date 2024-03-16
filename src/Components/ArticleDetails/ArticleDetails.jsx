import './ArticleDetails.css';
import { Link } from 'react-router-dom';

function ArticleDetails({ story, formatDate }) {
  
  return (
    <section className='details'>
      <h2>{story.title}</h2>
      <img className='details-image' src={story.urlToImage} alt='corresponding display of title'/>
      <p className='details-source'>Source: {story.source.name}</p>
      <p className='details-date'>{formatDate(story.publishedAt)}</p>
      <p className='details-content'>{story.content}</p>
      <Link to='/'>
        <button className='back-btn'>Back</button>
      </Link>
    </section>
  );
}

export default ArticleDetails;