import React from 'react';
import NavContent from './NavContent';
import * as NavStyles from './Nav.styled';

const NavFull: React.FC = () => (
  <NavStyles.FullContainer>
    <NavContent />
  </NavStyles.FullContainer>
);

export default NavFull;
