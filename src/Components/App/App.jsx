import './App.css';
// import mockData from '../../mock-data';
import Home from '../Home/Home';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import NotFound from '../NotFound/NotFound';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap" rel="stylesheet"/>
      <div className="App">
        <h1>NewsWorthy</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/article/:id' element={<ArticleDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
