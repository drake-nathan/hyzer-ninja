import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { ThemeContext } from '../../contexts/ThemeContext';
import NavMobile from './NavMobile';
import {
  StyledHeaderContainer,
  StyledTitleDiv,
  StyledTitle,
  StyledNinjaImg,
  StyledRightSideDiv,
  StyledDarkModeDiv,
  StyledHamburgerDiv,
} from './Header.styled';

interface Props {
  toggleDarkMode: () => void;
}

const Header = ({ toggleDarkMode }: Props) => {
  const iconSize = 35;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { colorTextOffset } = useContext(ThemeContext).theme;

  return (
    <StyledHeaderContainer>
      <StyledTitleDiv>
        <Link to="/">
          <StyledNinjaImg className="svg-color" src="/favpng_ninja-icon.png" />
        </Link>
        <StyledTitle>Hyzer Ninja</StyledTitle>
      </StyledTitleDiv>
      <StyledRightSideDiv>
        <StyledDarkModeDiv color={colorTextOffset}>
          <DarkModeOutlinedIcon
            sx={{ fontSize: iconSize }}
            onClick={toggleDarkMode}
          />
        </StyledDarkModeDiv>
        <StyledHamburgerDiv>
          <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} />
        </StyledHamburgerDiv>
      </StyledRightSideDiv>
      {isNavOpen && <NavMobile setIsNavOpen={setIsNavOpen} />}
    </StyledHeaderContainer>
  );
};

export default Header;
