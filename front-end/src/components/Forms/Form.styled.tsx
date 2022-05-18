import styled from '@emotion/styled';
import { Slider, Select } from '@mui/material';
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
  font-size: 1.25rem;
`;

export const DiscFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em auto;
  max-width: 600px;
  gap: 1.5em;

  @media (min-width: 400px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  @media (min-width: 400px) {
    justify-content: flex-end;
  }
`;

export const Input = styled.input<ThemeType>`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.5em;
  max-width: 90%;
  background-color: ${(props) => props.theme.colorFormBg};
  color: ${(props) => props.theme.colorText};
`;

export const Dropdown = styled(Select)<ThemeType>`
  border: 1px solid gray;
  border-radius: 5px;
  /* padding: 0.5em; */
  /* max-width: 90%; */
  background-color: ${(props) => props.theme.colorFormBg};
  color: ${(props) => props.theme.colorText};
`;

export const CustomSlider = styled(Slider)<ThemeType>`
  color: ${(props) => props.theme.colorText};
  width: 90%;
`;

export const SubmitButton = styled(Button)``;
