import styled from '@emotion/styled';
import { IThemeTypes } from '../../contexts/ThemeContext';

type NavMobileTypes = { theme: IThemeTypes };

export const Container = styled.div<NavMobileTypes>`
  position: absolute;
  right: 5px;
  top: 83px;

  display: flex;

  background-color: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorText};
  border: 1px solid gray;
  border-radius: 5px;

  padding: 1em;
`;

export const List = styled.ul`
  margin: 0 auto;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
`;

export const Link = styled.a``;

export const Text = styled.span<NavMobileTypes>`
  color: ${(props) => props.theme.colorText};
  margin-left: 0.5em;
`;

export const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid gray;
  margin-top: 1em;
  padding-top: 1em;
`;

export const LoginButton = styled.button<NavMobileTypes>`
  background-color: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorText};
  border: 1px solid gray;
  border-radius: 5px;

  min-width: 70px;
  padding: 0.5em;
  margin: 0 0.5em;

  cursor: pointer;
`;
