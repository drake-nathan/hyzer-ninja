import styled from '@emotion/styled';
import { IThemeTypes } from '../../contexts/ThemeContext';

type ThemeType = { theme: IThemeTypes };
type NavOpenType = { isNavOpen: boolean };

export const MobileContainer = styled.div<ThemeType>`
  position: absolute;
  right: 5px;
  top: 83px;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorText};
  border: 1px solid gray;
  border-radius: 5px;

  padding: 1em;
`;

export const FullContainer = styled.div`
  display: flex;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0.5em;
`;

export const Link = styled.a``;

export const Text = styled.span<ThemeType>`
  color: ${(props) => props.theme.colorText};
  margin-left: 0.5em;
`;

export const LoginDiv = styled.div<NavOpenType>`
  display: flex;
  justify-content: center;
  border-top: ${(props) => (props.isNavOpen ? '1px solid gray' : 'none')};
  margin-top: ${(props) => (props.isNavOpen ? '1em' : '0')};
  padding-top: ${(props) => (props.isNavOpen ? '1em' : '0')};
`;

const Button = styled.button<ThemeType>`
  background-color: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorText};
  border: 1px solid gray;
  padding: 0.5em;
  min-width: 70px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.colorBgOffset};
  }
`;

export const SignUpButton = styled(Button)`
  border-radius: 5px 0 0 5px;
`;

export const LoginButton = styled(Button)`
  border-radius: 0 5px 5px 0;
  border-left: none;
`;

export const LogoutButton = styled(Button)`
  min-width: 142px;
`;
