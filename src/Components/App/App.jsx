import './App.css';
import { getData } from '../../apiCalls';
import Home from '../Home/Home';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import NotFound from '../NotFound/NotFound';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState([]);
  const [story, setStory] = useState({});
  const [topic, setTopic] = useState('All');

  const getArticles = () => {
    getData(topic)
    .then(response => response.json())
    .then(data => setArticles(data.articles.filter(article => {
      return article.title !== '[Removed]' && article.description;
    })))
  };

  useEffect(() => {
    getArticles();
  }, [topic]);

  const formatDate = (date) => {
    const dateArray = date.split('');
    const dayAndMonth = dateArray.splice(5,5).join('');
    const year = dateArray.splice(0, 4).join('');
    return (dayAndMonth + - year);
  }
  
  return (
      <div className="App">
        <h1>NewsWorthy</h1>
        <Routes>
          <Route path='/' element={<Home articles={articles} setArticles={setArticles} topic={topic} setTopic={setTopic} setStory={setStory} formatDate={formatDate}/>} />
          <Route path='/article/:id' element={<ArticleDetails story={story} formatDate={formatDate}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
  );
};

export default App;
