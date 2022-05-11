import styled from '@emotion/styled';
import { IThemeTypes } from '../../contexts/ThemeContext';
import { Button } from '../Main.styled';

type ThemeType = { theme: IThemeTypes };

export const Container = styled.div`
  margin: 0 auto;
  padding: 1.5em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  font-size: 1.25em;
`;

export const DiscForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: 400px;
  gap: 1em;
  font-size: 1.25em;
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const Label = styled.label``;

export const Input = styled.input<ThemeType>`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.5em;
  max-width: 80%;
  background-color: ${(props) => props.theme.colorFormBg};
  color: ${(props) => props.theme.colorText};
`;

export const SubmitButton = styled(Button)``;
