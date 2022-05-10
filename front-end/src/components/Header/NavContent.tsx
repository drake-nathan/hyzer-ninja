import React, { useContext, useState } from 'react';
import SellIcon from '@mui/icons-material/SellOutlined';
import LightbulbIcon from '@mui/icons-material/LightbulbOutlined';
import { ThemeContext, NavOpenContext } from '../../contexts/contextIndex';
import * as NavStyled from './Nav.styled';

const NavContent: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const isNavOpen = useContext(NavOpenContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <NavStyled.Item>
        <SellIcon />
        <NavStyled.Link href="#">
          <NavStyled.Text theme={theme}>Sell</NavStyled.Text>
        </NavStyled.Link>
      </NavStyled.Item>

      <NavStyled.Item>
        <LightbulbIcon />
        <NavStyled.Link href="#">
          <NavStyled.Text theme={theme}>Request Features</NavStyled.Text>
        </NavStyled.Link>
      </NavStyled.Item>

      <NavStyled.ButtonDiv isNavOpen={isNavOpen}>
        {!isLoggedIn ? (
          <>
            <NavStyled.Link href="/register">
              <NavStyled.SignUpButton className="signup" theme={theme}>
                Sign Up
              </NavStyled.SignUpButton>
            </NavStyled.Link>
            <NavStyled.Link href="#">
              <NavStyled.LoginButton
                className="login"
                theme={theme}
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </NavStyled.LoginButton>
            </NavStyled.Link>
          </>
        ) : (
          <NavStyled.LogoutButton
            className="logout"
            theme={theme}
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </NavStyled.LogoutButton>
        )}
      </NavStyled.ButtonDiv>
    </>
  );
};

export default NavContent;
