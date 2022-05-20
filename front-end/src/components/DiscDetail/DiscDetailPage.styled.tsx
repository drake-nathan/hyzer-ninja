import styled from '@emotion/styled';
import { ThemeType, Button } from '../Main.styled';

type Props = { color: string };

export const DiscDetailContainer = styled.div`
  max-width: 1115px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  padding: 1.5em;
`;

export const ImgDiv = styled.div`
  min-width: 275px;

  @media (min-width: 800px) {
    max-width: 60%;
  }
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (min-width: 800px) {
    max-width: 40%;
  }
`;

export const UserImg = styled.img<Props>`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${(props) => props.color};
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonDiv = styled.div``;

export const Title = styled.h3<Props>`
  text-align: center;
  padding: 0.5em;
  font-size: 1.75rem;
  line-height: 1.3;
  letter-spacing: 1.3px;
  border-bottom: 1px solid gray;
`;

export const List = styled.ul`
  padding: 1em;
`;

export const Text = styled.li`
  font-size: 1.375rem;
  margin-bottom: 0.5em;
`;

export const DiscButton = styled(Button)`
  font-size: 1.25rem;
  margin: 0.5em;
`;

export const DeleteModal = styled.div<ThemeType>`
  position: absolute;
  bottom: 0px;
  right: 5px;

  @media (min-width: 500px) {
    bottom: 20%;
    right: 9%;
  }

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorText};
  border: 1px solid gray;
  border-radius: 10px;

  padding: 1em;
`;

export const ModalText = styled.span`
  margin: 0.5em 0.5em 1em 0.5em;
`;

export const ModalButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalButton = styled(Button)`
  /* font-size: 1.25rem; */
  margin: 0.5em;
`;

export const Link = styled.a``;

export const BuyModal = styled(DeleteModal)`
  margin: 0.5em;
  max-width: 300px;

  @media (min-width: 500px) {
    bottom: 10%;
    right: 9%;
  }

  font-size: 1.25rem;
  letter-spacing: 1px;
`;
