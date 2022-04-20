import './index.css'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import ResultPage from './components/searchResultsPage';
import Wishlist from './components/wishlist';
import HomePage from './components/homePage';
import { countContext } from './contexts/countContext';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState( () => {
    const localStorageValue = localStorage.getItem('wishlist');
    return JSON.parse(localStorageValue).length
  } )
  return (
    <div className='test'>
      <countContext.Provider value={{count, setCount}}>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search-results' element={<ResultPage />} />
            <Route path='/wishlist' element={<Wishlist />} />
          </Routes>
        </Router>
      </countContext.Provider>
    </div>
  );
}

export default App;
