import './App.css';
import mockData from '../../mock-data';
import Home from '../Home/Home';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import NotFound from '../NotFound/NotFound';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState(mockData.articles.filter(article => article.title !== '[Removed]'));
  const [story, setStory] = useState({})

  // const getArticles = () => {
  //   getData().then(data => setArticles(data.articles.filter(article => article.title !== '[Removed]')))
  // }

  // useEffect(() => {
  //   getArticles()
  // }, [])

  const formatDate = (date) => {
    const dateArray = date.split('')
    const dayAndMonth = dateArray.splice(5,5).join('')
    const year = dateArray.splice(0, 4).join('')
    return (dayAndMonth + - year)
  }
  
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap" rel="stylesheet"/>
      <div className="App">
        <h1>NewsWorthy</h1>
        <Routes>
          <Route path='/' element={<Home articles={articles} setStory={setStory} formatDate={formatDate}/>} />
          <Route path='/article/:id' element={<ArticleDetails story={story} formatDate={formatDate}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
