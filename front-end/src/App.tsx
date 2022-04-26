import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </>
);

export default App;
