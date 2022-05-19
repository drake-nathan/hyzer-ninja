import './App.css';
import { useState, useMemo, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext, themes, LoginContext } from './contexts/contextIndex';

import * as St from './App.styled';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import DiscList from './components/DiscList/DiscList';
import DiscDetailPage from './components/DiscDetail/DiscDetailPage';
import RegisterForm from './components/Forms/RegisterForm';
import LoginForm from './components/Forms/LoginForm';
import DiscForm from './components/Forms/DiscForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const memoizedLoginState = useMemo(
    () => ({ isLoggedIn, setIsLoggedIn }),
    [isLoggedIn, setIsLoggedIn]
  );

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = prefersDark ? themes.dark : themes.light;

  const [theme, setTheme] = useState(defaultTheme);
  const [isDarkMode, setIsDarkMode] = useState(prefersDark);
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
      <LoginContext.Provider value={memoizedLoginState}>
        <St.AppContainer theme={theme}>
          <Header toggleDarkMode={toggleDarkMode} />
          <St.MainContainer>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/disc/:id" element={<DiscDetailPage />} />
              <Route path="/discform" element={<DiscForm />} />
              <Route path="/" element={<DiscList />} />
            </Routes>
          </St.MainContainer>
          <Footer />
        </St.AppContainer>
      </LoginContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
