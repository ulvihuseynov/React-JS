import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import PagesContainer from './container/PagesContainer';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Search from './pages/Search';

function App() {
  return (
<div>
  <PagesContainer>
  <Router>
    <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products/:id' element={<Detail/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/products/Search' element={<Search/>}/>



  </Routes>
  </Router>
  </PagesContainer>
</div>
  );
}

export default App;
