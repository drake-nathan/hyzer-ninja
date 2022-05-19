import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/WbSunnyOutlined';
import Hamburger from 'hamburger-react';
import { ThemeContext, NavOpenContext } from '../../contexts/contextIndex';
import useWindowWidth from '../../hooks/windowHook';
import NavMobile from './NavMobile';
import NavFull from './NavFull';
import * as St from './Header.styled';

interface Props {
  toggleDarkMode: () => void;
}

const Header: React.FC<Props> = ({ toggleDarkMode }) => {
  const iconSize = 35;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { colorTextOffset, isDarkMode } = useContext(ThemeContext).theme;
  const windowWidth = useWindowWidth();
  const navBreakPoint = windowWidth < 650;

  useEffect(() => {
    if (!navBreakPoint) setIsNavOpen(false);
  }, [navBreakPoint]);

  return (
    <NavOpenContext.Provider value={isNavOpen}>
      <St.Container>
        <St.TitleDiv>
          <Link to="/">
            <St.NinjaImg className="svg-color" src="/favpng_ninja-icon.png" />
          </Link>
          <St.Title isMobile={navBreakPoint}>Hyzer Ninja</St.Title>
        </St.TitleDiv>
        <St.RightSideDiv>
          <St.DarkModeDiv color={colorTextOffset}>
            {isDarkMode ? (
              <LightModeIcon
                sx={{ fontSize: iconSize }}
                onClick={toggleDarkMode}
              />
            ) : (
              <DarkModeIcon
                sx={{ fontSize: iconSize }}
                onClick={toggleDarkMode}
              />
            )}
          </St.DarkModeDiv>
          <St.HamburgerDiv>
            {navBreakPoint ? (
              <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} />
            ) : (
              <NavFull />
            )}
          </St.HamburgerDiv>
        </St.RightSideDiv>
        {isNavOpen && <NavMobile setIsNavOpen={setIsNavOpen} />}
      </St.Container>
    </NavOpenContext.Provider>
  );
};

export default Header;
