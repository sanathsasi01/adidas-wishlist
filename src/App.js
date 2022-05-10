import './index.css'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import ResultPage from './components/searchResultsPage';
import Wishlist from './components/wishlist';
import HomePage from './components/homePage';
import Navigation from './components/navigation';

function App() {

  return (
    <div className='test'>
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search-results' element={<ResultPage />} />
            <Route path='/wishlist' element={<Wishlist />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
