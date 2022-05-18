import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import MainTitle from './components/mainTitle/MainTitle';
import About from './components/about/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainTitle />
      <Routes>
        <Route path='/' element={<Cart />} />
        <Route path='/thecart' element={<Cart />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
