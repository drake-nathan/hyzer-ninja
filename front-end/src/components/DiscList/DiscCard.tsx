/* eslint-disable camelcase */
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import * as St from './DiscCard.styled';

interface Props {
  // _id: number;
  title: string;
  brand: string;
  // type: string;
  mold: string;
  base_plastic: string;
  sub_plastic?: string;
  run?: string;
  // condition: number;
  price: number;
  image_url: string;
}

const DiscCard = ({
  title,
  brand,
  mold,
  base_plastic,
  sub_plastic,
  run,
  price,
  image_url,
}: Props) => {
  const { colorTextOffset } = useContext(ThemeContext).theme;

  return (
    <St.DiscCardContainer color={colorTextOffset}>
      <St.Img src={image_url} />
      <St.DescriptionDiv>
        <St.Title>{title}</St.Title>
        <St.DescriptionRow>
          <St.Text>
            {brand} {mold}
          </St.Text>
          <St.Text>
            <strong>${price}</strong>
          </St.Text>
        </St.DescriptionRow>
        <St.DescriptionRow>
          <St.Text>
            {sub_plastic} {base_plastic}
          </St.Text>
          <St.Text>{run}</St.Text>
        </St.DescriptionRow>
      </St.DescriptionDiv>
    </St.DiscCardContainer>
  );
};

export default DiscCard;
