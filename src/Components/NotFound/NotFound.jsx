import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className='not-found-container'>
      <p className='not-found-msg'>Page not found!</p>
      <Link to='/'>
        <button className='return-btn'>Return to Home</button>
      </Link>
    </section>
  );
};

export default NotFound;