import React, { useContext } from 'react';
import SellIcon from '@mui/icons-material/SellOutlined';
import LightbulbIcon from '@mui/icons-material/LightbulbOutlined';
import {
  ThemeContext,
  NavOpenContext,
  LoginContext,
} from '../../contexts/contextIndex';
import * as St from './Nav.styled';

const NavContent: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const isNavOpen = useContext(NavOpenContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('userId');
  };

  return (
    <>
      <St.Item>
        <SellIcon />
        <St.Link href="/discform">
          <St.Text theme={theme}>Sell a Disc</St.Text>
        </St.Link>
      </St.Item>

      <St.Item>
        <LightbulbIcon />
        <St.Link href="mailto: nathandrakedrums@gmail.com">
          <St.Text theme={theme}>Request Features</St.Text>
        </St.Link>
      </St.Item>

      <St.ButtonDiv isNavOpen={isNavOpen}>
        {!isLoggedIn ? (
          <>
            <St.Link href="/register">
              <St.SignUpButton theme={theme}>Sign Up</St.SignUpButton>
            </St.Link>
            <St.Link href="/login">
              <St.LoginButton theme={theme}>Login</St.LoginButton>
            </St.Link>
          </>
        ) : (
          <>
            <St.LogoutButton theme={theme} onClick={handleLogoutClick}>
              Logout
            </St.LogoutButton>
            <St.Link href="/user">
              <St.ProfilePic src="/media/selfie.jpeg" />
            </St.Link>
          </>
        )}
      </St.ButtonDiv>
    </>
  );
};

export default NavContent;
