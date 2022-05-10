import styled from '@emotion/styled';
import { ThemeType, Button } from '../Main.styled';

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
  font-size: 1.125rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0.5em;
`;

export const Link = styled.a``;

export const Text = styled.span<ThemeType>`
  color: ${(props) => props.theme.colorText};
  margin-left: 0.25em;
`;

export const ButtonDiv = styled.div<NavOpenType>`
  display: flex;
  justify-content: center;
  border-top: ${(props) => (props.isNavOpen ? '1px solid gray' : 'none')};
  margin: ${(props) => (props.isNavOpen ? '1em 0 0 0' : '0 0.5em 0 0.5em')};
  padding-top: ${(props) => (props.isNavOpen ? '1em' : '0')};
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
