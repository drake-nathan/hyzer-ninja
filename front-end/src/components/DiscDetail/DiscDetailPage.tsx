import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { discs } from '../../content/discs';
import * as St from './DiscDetailPage.styled';

const DiscDetailPage = () => {
  const { id } = useParams();
  const disc = discs.find((e) => `${e._id}` === id);
  const { colorTextOffset } = useContext(ThemeContext).theme;

  return (
    <St.DiscDetailContainer>
      <St.ImgDiv>
        <St.DiscImg src={disc?.image} color={colorTextOffset} />
      </St.ImgDiv>
      <St.DescriptionDiv>
        <St.Title color={colorTextOffset}>{disc?.title}</St.Title>
        <St.List>
          <St.Text>
            {disc?.brand} {disc?.mold}
          </St.Text>
          <St.Text>
            {disc?.subPlastic} {disc?.basePlastic}
          </St.Text>
          <St.Text>Condition: {disc?.condition}/10</St.Text>
          <St.Text>Price: ${disc?.price}</St.Text>
        </St.List>
      </St.DescriptionDiv>
    </St.DiscDetailContainer>
  );
};

export default DiscDetailPage;
