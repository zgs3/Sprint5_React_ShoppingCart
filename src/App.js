import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import MainTitle from './components/mainTitle/MainTitle';
import About from './components/about/About';
import ErrorPage from './components/errorPage/ErrorPage';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Header />
      <MainTitle />
      <Routes>
        <Route path='/*' element={<ErrorPage />} />
        <Route path='/' element={<Cart />} />
        <Route path='/thecart' element={<Cart />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
