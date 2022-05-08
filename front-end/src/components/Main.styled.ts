import styled from '@emotion/styled';

import { IThemeTypes } from '../contexts/contextIndex';

type ThemeType = { theme: IThemeTypes };

export const Container = styled.div`
  display: flex;
`;

export const Button = styled.button<ThemeType>`
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
