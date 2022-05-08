import React, { useContext, useState } from 'react';
import SellIcon from '@mui/icons-material/SellOutlined';
import LightbulbIcon from '@mui/icons-material/LightbulbOutlined';
import { ThemeContext, NavOpenContext } from '../../contexts/contextIndex';
import * as St from './Nav.styled';

const NavContent: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const isNavOpen = useContext(NavOpenContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <St.Item>
        <SellIcon />
        <St.Link href="#">
          <St.Text theme={theme}>Sell</St.Text>
        </St.Link>
      </St.Item>

      <St.Item>
        <LightbulbIcon />
        <St.Link href="#">
          <St.Text theme={theme}>Request Features</St.Text>
        </St.Link>
      </St.Item>

      <St.ButtonDiv isNavOpen={isNavOpen}>
        {!isLoggedIn ? (
          <>
            <St.Link href="/register">
              <St.SignUpButton className="signup" theme={theme}>
                Sign Up
              </St.SignUpButton>
            </St.Link>
            <St.Link href="#">
              <St.LoginButton
                className="login"
                theme={theme}
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </St.LoginButton>
            </St.Link>
          </>
        ) : (
          <St.LogoutButton
            className="logout"
            theme={theme}
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </St.LogoutButton>
        )}
      </St.ButtonDiv>
    </>
  );
};

export default NavContent;
