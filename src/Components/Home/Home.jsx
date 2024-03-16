import './Home.css';
import Search from '../Search/Search';
import Articles from '../Articles/Articles';
import { getData } from '../../apiCalls';
import { useEffect, useState } from 'react';
// import mockData from '../../mock-data';

function Home() {
  const [articles, setArticles] = useState([]);
  
  const getArticles = () => {
    getData().then(data => setArticles(data.articles.filter(article => article.title !== '[Removed]')))
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <main>
      <Search />
      <section className="articles-container">
        <Articles articles={articles}/>
      </section>
    </main>
  );
}

export default Home;