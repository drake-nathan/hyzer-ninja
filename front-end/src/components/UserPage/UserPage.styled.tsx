import styled from '@emotion/styled';
import { ThemeType } from '../Main.styled';

export const UserContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  padding: 1em;
`;

export const ImgDiv = styled.div`
  min-width: 200px;
`;

export const UserImg = styled.img<ThemeType>`
  width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 1px 1px 5px ${(props) => props.theme.colorBgOffset};
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3<ThemeType>`
  text-align: center;
  padding: 0.5em 1.5em;
  font-size: 1.75rem;
  line-height: 1.3;
  letter-spacing: 1.3px;
  border-bottom: 1px solid ${(props) => props.theme.colorText};
`;

export const List = styled.ul`
  margin-top: 1.5em;
`;

export const Text = styled.li`
  font-size: 1.25rem;
  margin-bottom: 1em;
`;

export const DiscsTitle = styled(Title)`
  margin-bottom: 1em;
`;
