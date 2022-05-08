import styled from '@emotion/styled';

type Props = { color: string };

export const DiscDetailContainer = styled.div`
  max-width: 1115px;
  margin: 0 auto;

  display: flex;
  /* flex-wrap: wrap; */
  gap: 1.5em;
  padding: 1.5em;
`;

export const ImgDiv = styled.div`
  /* max-width: 50%; */
`;

export const DiscImg = styled.img<Props>`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${(props) => props.color};
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50%;
`;

export const Title = styled.h3<Props>`
  text-align: center;
  padding: 0.5em;
  font-size: 1.75rem;
  line-height: 1.3;
  letter-spacing: 1.3px;
  border-bottom: 1px solid ${(props) => props.color};
`;

export const List = styled.ul`
  padding: 1em;
`;

export const Text = styled.li`
  font-size: 1.25rem;
  margin-bottom: 0.5em;
`;
