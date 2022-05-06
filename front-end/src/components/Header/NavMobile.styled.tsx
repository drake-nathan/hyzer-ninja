import styled from '@emotion/styled';
import { IThemeTypes } from '../../contexts/ThemeContext';

type NavMobileTypes = { theme: IThemeTypes };

export const Container = styled.div<NavMobileTypes>`
  position: absolute;
  right: 5px;
  top: 83px;

  display: flex;

  background-color: ${(props) => props.theme.colorBg};
  border: 1px solid ${(props) => props.theme.colorText};
  border-radius: 5px;

  padding: 1em;
`;

export const List = styled.ul`
  margin: 0 auto;
`;

export const Item = styled.li``;

export const Link = styled.a``;

export const Text = styled.span``;

export const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5em;
`;

export const LoginButton = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;

  padding: 0.5em;
  margin: 0 0.5em;

  cursor: pointer;
`;
