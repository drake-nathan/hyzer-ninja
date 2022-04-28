import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { IThemeTypes, ThemeContext } from '../../contexts/ThemeContext';
import {
  StyledHeaderContainer,
  StyledTitle,
  StyledNinjaImg,
  StyledTitleDiv,
  StyledDarkModeDiv,
  StyledHamburgerDiv,
} from './Header.styled';

interface Props {
  toggleDarkMode: () => void;
}

const Header = ({ toggleDarkMode }: Props) => {
  const iconSize = 50;
  const [isNavOpen, setNavOpen] = useState(false);
  const { colorTextOffset } = useContext(ThemeContext).theme;

  return (
    <StyledHeaderContainer>
      <StyledTitleDiv>
        <Link to="/">
          <StyledNinjaImg className="svg-color" src="/favpng_ninja-icon.png" />
        </Link>
        <StyledTitle>Hyzer Ninja</StyledTitle>
      </StyledTitleDiv>
      <StyledDarkModeDiv color={colorTextOffset}>
        <DarkModeOutlinedIcon
          sx={{ fontSize: iconSize }}
          onClick={toggleDarkMode}
        />
      </StyledDarkModeDiv>
      <StyledHamburgerDiv>
        <Hamburger toggled={isNavOpen} toggle={setNavOpen} />
      </StyledHamburgerDiv>
    </StyledHeaderContainer>
  );
};

export default Header;
