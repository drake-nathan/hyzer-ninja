import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { fetchSingleDisc, deleteDisc } from '../../actions/actionsIndex';
import { IDiscTypesDB } from '../../types/typesindex';
import * as St from './DiscDetailPage.styled';

const DiscDetailPage = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { id: discId } = useParams();
  const [disc, setDisc] = useState<IDiscTypesDB>();
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  useEffect(() => {
    fetchSingleDisc(discId as string).then((res) => setDisc(res?.data));
  }, [discId]);

  const handleDiscDelete = async (id: string) => {
    const resultStatus = await deleteDisc(id);
    if (resultStatus === 200) {
      navigate('/');
    } else {
      alert('Disc could not be deleted');
    }
  };

  return (
    <St.DiscDetailContainer>
      <St.ImgDiv>
        <St.DiscImg src={disc?.image_url} color={theme.colorTextOffset} />
      </St.ImgDiv>
      <St.DescriptionDiv>
        <St.TextDiv>
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
          <St.ButtonDiv>
            <Link to="/discform" state={{ disc }}>
              <St.EditButton theme={theme}>Edit</St.EditButton>
            </Link>
            <St.DeleteButton
              theme={theme}
              onClick={() => setIsDeleteModal(!isDeleteModal)}
            >
              Delete
            </St.DeleteButton>
            <St.BuyButton theme={theme}>Buy Now</St.BuyButton>
          </St.ButtonDiv>
        </St.TextDiv>
      </St.DescriptionDiv>
      {isDeleteModal && (
        <St.DeleteModal theme={theme}>
          <St.ModalText>Are you sure you want to delete this?</St.ModalText>
          <St.ModalButtonDiv>
            <St.DeleteButton
              theme={theme}
              onClick={() => handleDiscDelete(discId as string)}
            >
              Delete that shiz
            </St.DeleteButton>
            <St.DeleteButton
              theme={theme}
              onClick={() => setIsDeleteModal(false)}
            >
              Nooooooo
            </St.DeleteButton>
          </St.ModalButtonDiv>
        </St.DeleteModal>
      )}
    </St.DiscDetailContainer>
  );
};

export default DiscDetailPage;
