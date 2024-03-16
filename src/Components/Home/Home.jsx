import './Home.css';
import Search from '../Search/Search';
import Articles from '../Articles/Articles';
// import { getData } from '../../apiCalls';
import { useEffect, useState } from 'react';

function Home({ articles, setStory, formatDate }) {


  return (
    <main>
      <Search />
      <section className="articles-container">
        <Articles articles={articles} setStory={setStory} formatDate={formatDate}/>
      </section>
    </main>
  );
}

export default Home;