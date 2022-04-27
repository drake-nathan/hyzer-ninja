import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

const App: React.FC = () => (
  <ThemeContext.Provider>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </ThemeContext.Provider>
);

export default App;
