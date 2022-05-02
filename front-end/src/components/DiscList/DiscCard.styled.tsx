import styled from '@emotion/styled';

type Props = { color: string };

export const DiscCardContainer = styled.div<Props>`
  max-width: 256px;
  overflow: hidden;
  /* border: 1px solid ${(props) => props.color}; */
  border-radius: 3%;
  box-shadow: 1px 1px 5px ${(props) => props.color};
  transition-duration: 0.4s;

  :hover {
    transform: scale(1.04);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const DescriptionDiv = styled.div`
  min-height: 140px;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  padding: 0.75em;
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 1.25rem;
`;

export const DescriptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 0.5em 0; */
`;

export const Text = styled.p`
  margin: 0;
`;
