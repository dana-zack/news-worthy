import './Home.css';
import Search from '../Search/Search';
import Articles from '../Articles/Articles';

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