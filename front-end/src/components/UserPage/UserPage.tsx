/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/contextIndex';
import DiscList from '../DiscList/DiscList';
import * as St from './UserPage.styled';

const UserPage: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const userId = parseInt(localStorage.getItem('userId') as string) || 0;

  return (
    <>
      <St.UserContainer>
        <St.ImgDiv>
          <St.UserImg src="/media/selfie.jpeg" theme={theme} />
        </St.ImgDiv>
        <St.DescriptionDiv>
          <St.TextDiv>
            <St.Title theme={theme}>discgolf4lyfe88</St.Title>
            <St.List>
              <St.Text>Email: nathan@hyzer.ninja</St.Text>
              <St.Text>Paypal: pleasepayme@hyzer.ninja</St.Text>
            </St.List>
          </St.TextDiv>
        </St.DescriptionDiv>
      </St.UserContainer>
      <St.DiscsTitle theme={theme}>Your Discs For Sale</St.DiscsTitle>
      <DiscList userId={userId} />
    </>
  );
};

export default UserPage;
