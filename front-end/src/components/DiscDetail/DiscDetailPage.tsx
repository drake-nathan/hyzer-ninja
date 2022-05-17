import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { fetchSingleDisc } from '../../actions/actionsIndex';
import { DiscTypes } from '../../types/typesindex';
import * as St from './DiscDetailPage.styled';

const DiscDetailPage = () => {
  const { colorTextOffset } = useContext(ThemeContext).theme;
  const { id } = useParams();
  const [disc, setDisc] = useState<DiscTypes>();

  useEffect(() => {
    fetchSingleDisc(id as string).then((res) => setDisc(res?.data));
  }, [id]);

  return (
    <St.DiscDetailContainer>
      <St.ImgDiv>
        <St.DiscImg src={disc?.image_url} color={colorTextOffset} />
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
