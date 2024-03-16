import './Home.css';
import Search from '../Search/Search';
import Articles from '../Articles/Articles';
// import apiCalls from '../../apiCalls';
import { useEffect, useState } from 'react';
import mockData from '../../mock-data';

function Home() {
  const [articles, setArticles] = useState(mockData.articles);
  
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