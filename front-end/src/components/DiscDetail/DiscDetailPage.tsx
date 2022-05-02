import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { discs } from '../../content/discs';
import {
  DiscDetailContainer,
  ImgDiv,
  DiscImg,
  DescriptionDiv,
  Title,
  Text,
} from './DiscDetailPage.styled';

const DiscDetailPage = () => {
  const { id } = useParams();
  const disc = discs.find((e) => `${e._id}` === id);
  const { colorTextOffset } = useContext(ThemeContext).theme;

  return (
    <DiscDetailContainer>
      <ImgDiv>
        <DiscImg src={disc?.image} color={colorTextOffset} />
      </ImgDiv>
      <DescriptionDiv>
        <Title color={colorTextOffset}>{disc?.title}</Title>
      </DescriptionDiv>
      <Text>
        {disc?.brand} {disc?.mold}
      </Text>
    </DiscDetailContainer>
  );
};

export default DiscDetailPage;
