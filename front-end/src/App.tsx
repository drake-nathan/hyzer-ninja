import './App.css';
import { useState, useMemo, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext, themes } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import DiscList from './components/DiscList/DiscList';
import DiscDetailPage from './components/DiscDetail/DiscDetailPage';
import RegisterForm from './components/Forms/RegisterForm';
import * as St from './App.styled';

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const memoizedThemeState = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  );

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const newTheme = isDarkMode ? themes.dark : themes.light;
    setTheme(newTheme);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={memoizedThemeState}>
      <St.AppContainer theme={theme}>
        <Header toggleDarkMode={toggleDarkMode} />
        <St.MainContainer>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/disc/:id" element={<DiscDetailPage />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/" element={<DiscList />} />
          </Routes>
        </St.MainContainer>
        <Footer />
      </St.AppContainer>
    </ThemeContext.Provider>
  );
};

export default App;
