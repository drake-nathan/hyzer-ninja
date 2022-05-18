import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { fetchSingleDisc } from '../../actions/actionsIndex';
import { IDiscTypesDB } from '../../types/typesindex';
import * as St from './DiscDetailPage.styled';

const DiscDetailPage = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [disc, setDisc] = useState<IDiscTypesDB>();

  useEffect(() => {
    fetchSingleDisc(id as string).then((res) => setDisc(res?.data));
  }, [id]);

  return (
    <St.DiscDetailContainer>
      <St.ImgDiv>
        <St.DiscImg src={disc?.image_url} color={theme.colorTextOffset} />
      </St.ImgDiv>
      <St.DescriptionDiv>
        <St.Title color={theme.colorTextOffset}>{disc?.title}</St.Title>
        <St.List>
          <St.Text>
            {disc?.brand} {disc?.mold}
          </St.Text>
          <St.Text>
            {disc?.sub_plastic} {disc?.base_plastic}
          </St.Text>
          <St.Text>Condition: {disc?.condition}/10</St.Text>
          <St.Text>Price: ${disc?.price}</St.Text>
        </St.List>
        <St.EditButton theme={theme}>Edit</St.EditButton>
      </St.DescriptionDiv>
    </St.DiscDetailContainer>
  );
};

export default DiscDetailPage;
