import './Home.css';
import Search from '../Search/Search';
import Articles from '../Articles/Articles';
import PropTypes from 'prop-types';

function Home({ articles, setArticles, topic, setTopic, setStory, formatDate }) {
  return (
    <main>
      <Search articles={articles} setArticles={setArticles} topic={topic} setTopic={setTopic}/>
      <section className="articles-container">
        <Articles articles={articles} setStory={setStory} formatDate={formatDate}/>
      </section>
    </main>
  );
};

export default Home;

Home.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  setArticles: PropTypes.func.isRequired,
  topic: PropTypes.string.isRequired,
  setTopic: PropTypes.func.isRequired,
  setStory: PropTypes.func.isRequired,
  formatDate: PropTypes.func.isRequired
};