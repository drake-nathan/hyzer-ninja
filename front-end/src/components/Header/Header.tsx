// import MenuIcon from '@mui/icons-material/Menu';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import {
  HeaderContainer,
  StyledTitle,
  StyledNinjaImg,
  StlyedTitleDiv,
  StyledIconDiv,
} from './Header.styled';

const Header = () => {
  // const iconSize = 50;
  const [isOpen, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <StlyedTitleDiv>
        <Link to="/">
          <StyledNinjaImg src="/favpng_ninja-icon.png" />
        </Link>
        <StyledTitle>Hyzer Ninja</StyledTitle>
      </StlyedTitleDiv>
      <StyledIconDiv>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </StyledIconDiv>
    </HeaderContainer>
  );
};

export default Header;
