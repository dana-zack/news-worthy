import './Search.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function Search({ topic, setTopic }) {
  const categories = ['All', 'Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

  const categoryButtons = categories.map(category => {
    return (
      <button
      key={uuidv4()}
      className={`toggle-btn ${topic === category && 'active'}`}
        onClick={() => setTopic(category)}>
        {category}
      </button>
    );
  });

  return (
    <section className='button-container'>
      {categoryButtons}
    </section>
  );
};

export default Search;

Search.propTypes = {
  topic: PropTypes.string.isRequired,
  setTopic: PropTypes.func.isRequired
};