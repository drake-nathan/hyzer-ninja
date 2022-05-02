import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import {
  DiscCardContainer,
  Img,
  DescriptionDiv,
  Title,
  DescriptionRow,
  Text,
} from './StyledDiscCard';

interface Props {
  // _id: number;
  title: string;
  brand: string;
  // type: string;
  mold: string;
  basePlastic: string;
  subPlastic?: string;
  run?: string;
  // condition: number;
  price: number;
  image: string;
}

const DiscCard = ({
  title,
  brand,
  mold,
  basePlastic,
  subPlastic,
  run,
  price,
  image,
}: Props) => {
  const { colorTextOffset } = useContext(ThemeContext).theme;

  return (
    <DiscCardContainer color={colorTextOffset}>
      <Img src={image} />
      <DescriptionDiv>
        <Title>{title}</Title>
        <DescriptionRow>
          <Text>
            {brand} {mold}
          </Text>
          <Text>
            <strong>${price}</strong>
          </Text>
        </DescriptionRow>
        <DescriptionRow>
          <Text>
            {subPlastic} {basePlastic}
          </Text>
          <Text>{run}</Text>
        </DescriptionRow>
      </DescriptionDiv>
    </DiscCardContainer>
  );
};

export default DiscCard;
