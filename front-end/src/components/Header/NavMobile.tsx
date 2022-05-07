/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import NavContent from './NavContent';
import * as NavStyles from './Nav.styled';

interface Props {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobile: React.FC<Props> = ({ setIsNavOpen }) => {
  const { theme } = useContext(ThemeContext);
  const portalRef = useRef<HTMLDivElement>(null);

  const closeNav = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === portalRef.current) {
      setIsNavOpen(false);
    }
  };

  return createPortal(
    <div className="portal" ref={portalRef} onClick={closeNav}>
      <NavStyles.MobileContainer theme={theme}>
        <NavContent />
      </NavStyles.MobileContainer>
    </div>,
    document.getElementById('portal') as HTMLDivElement
  );
};

export default NavMobile;
