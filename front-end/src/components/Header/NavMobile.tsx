/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import SellIcon from '@mui/icons-material/SellOutlined';
import LightbulbIcon from '@mui/icons-material/LightbulbOutlined';
import { ThemeContext } from '../../contexts/ThemeContext';
import * as NavStyles from './NavMobile.styled';

interface Props {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobile: React.FC<Props> = ({ setIsNavOpen }) => {
  const { theme } = useContext(ThemeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const portalRef = useRef<HTMLDivElement>(null);

  const closeNav = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === portalRef.current) {
      setIsNavOpen(false);
    }
  };

  return createPortal(
    <div className="portal" ref={portalRef} onClick={closeNav}>
      <NavStyles.Container theme={theme}>
        <NavStyles.List>
          <NavStyles.Item>
            <NavStyles.Link>
              <SellIcon />
              <NavStyles.Text>Sell</NavStyles.Text>
            </NavStyles.Link>
          </NavStyles.Item>
          <NavStyles.Item>
            <NavStyles.Link>
              <LightbulbIcon />
              <NavStyles.Text>Request Features</NavStyles.Text>
            </NavStyles.Link>
          </NavStyles.Item>
          <NavStyles.Item>
            <NavStyles.LoginDiv>
              <NavStyles.LoginButton>Sign Up</NavStyles.LoginButton>
              {!isLoggedIn ? (
                <NavStyles.LoginButton onClick={() => setIsLoggedIn(true)}>
                  Login
                </NavStyles.LoginButton>
              ) : (
                <NavStyles.LoginButton onClick={() => setIsLoggedIn(false)}>
                  Logout
                </NavStyles.LoginButton>
              )}
            </NavStyles.LoginDiv>
          </NavStyles.Item>
        </NavStyles.List>
      </NavStyles.Container>
    </div>,
    document.getElementById('portal') as HTMLDivElement
  );
};

export default NavMobile;
