import React, { useContext, useState } from 'react';
import SellIcon from '@mui/icons-material/SellOutlined';
import LightbulbIcon from '@mui/icons-material/LightbulbOutlined';
import { ThemeContext, NavOpenContext } from '../../contexts/contextIndex';
import * as NavStyles from './Nav.styled';

const NavContent: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const isNavOpen = useContext(NavOpenContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <NavStyles.Item>
        <SellIcon />
        <NavStyles.Link href="#">
          <NavStyles.Text theme={theme}>Sell</NavStyles.Text>
        </NavStyles.Link>
      </NavStyles.Item>

      <NavStyles.Item>
        <LightbulbIcon />
        <NavStyles.Link href="#">
          <NavStyles.Text theme={theme}>Request Features</NavStyles.Text>
        </NavStyles.Link>
      </NavStyles.Item>

      <NavStyles.ButtonDiv isNavOpen={isNavOpen}>
        {!isLoggedIn ? (
          <>
            <NavStyles.SignUpButton className="signup" theme={theme}>
              Sign Up
            </NavStyles.SignUpButton>
            <NavStyles.LoginButton
              className="login"
              theme={theme}
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </NavStyles.LoginButton>
          </>
        ) : (
          <NavStyles.LogoutButton
            className="logout"
            theme={theme}
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </NavStyles.LogoutButton>
        )}
      </NavStyles.ButtonDiv>
    </>
  );
};

export default NavContent;
