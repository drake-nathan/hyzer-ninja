import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/WbSunnyOutlined';
import Hamburger from 'hamburger-react';
import { ThemeContext, NavOpenContext } from '../../contexts/contextIndex';
import useWindowWidth from '../../hooks/windowHook';
import NavMobile from './NavMobile';
import NavFull from './NavFull';
import * as HeaderStyles from './Header.styled';

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
      <HeaderStyles.Container>
        <HeaderStyles.TitleDiv>
          <Link to="/">
            <HeaderStyles.NinjaImg
              className="svg-color"
              src="/favpng_ninja-icon.png"
            />
          </Link>
          <HeaderStyles.Title isMobile={navBreakPoint}>
            Hyzer Ninja
          </HeaderStyles.Title>
        </HeaderStyles.TitleDiv>
        <HeaderStyles.RightSideDiv>
          <HeaderStyles.DarkModeDiv color={colorTextOffset}>
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
          </HeaderStyles.DarkModeDiv>
          <HeaderStyles.HamburgerDiv>
            {navBreakPoint ? (
              <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} />
            ) : (
              <NavFull />
            )}
          </HeaderStyles.HamburgerDiv>
        </HeaderStyles.RightSideDiv>
        {isNavOpen && <NavMobile setIsNavOpen={setIsNavOpen} />}
      </HeaderStyles.Container>
    </NavOpenContext.Provider>
  );
};

export default Header;
