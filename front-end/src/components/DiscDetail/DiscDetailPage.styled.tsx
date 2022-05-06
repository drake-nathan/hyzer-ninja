import styled from '@emotion/styled';

type Props = { color: string };

export const DiscDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 1em;
`;

export const ImgDiv = styled.div``;

export const DiscImg = styled.img<Props>`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${(props) => props.color};
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
`;

export const Title = styled.h3<Props>`
  padding: 0.5em;
  font-size: 1.5rem;
  line-height: 1.3;
  letter-spacing: 1.3px;
  border: 2px solid ${(props) => props.color};
  border-radius: 10px;
`;

export const Text = styled.p``;
