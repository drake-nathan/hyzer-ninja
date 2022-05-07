import styled from '@emotion/styled';
import { IThemeTypes } from './contexts/ThemeContext';

interface Props {
  theme: IThemeTypes;
}

export const AppContainer = styled.div<Props>`
  background-color: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorText};
  transition-duration: 400ms;

  .svg-color {
    filter: ${(props) => props.theme.colorSvg};
  }
`;
