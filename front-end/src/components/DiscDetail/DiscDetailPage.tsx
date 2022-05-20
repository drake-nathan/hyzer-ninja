/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ThemeContext, LoginContext } from '../../contexts/contextIndex';
import { fetchSingleDisc, deleteDisc } from '../../actions/actionsIndex';
import { IDiscTypesDB } from '../../types/typesindex';
import * as St from './DiscDetailPage.styled';

const DiscDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const { isLoggedIn } = useContext(LoginContext);
  const userId = localStorage.getItem('userId') as string;
  const [isDiscMine, setIsDiscMine] = useState(false);

  const { id: discId } = useParams();
  const [disc, setDisc] = useState<IDiscTypesDB>();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isBuyModal, setIsBuyModal] = useState(false);

  useEffect(() => {
    fetchSingleDisc(discId as string).then((res) => setDisc(res?.data));
  }, [discId]);

  useEffect(() => {
    if (isLoggedIn) {
      if (disc?.user_id === parseInt(userId)) {
        setIsDiscMine(true);
      }
    }
  }, [isLoggedIn, userId, disc?.user_id]);

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
        <St.UserImg src={disc?.image_url} color={theme.colorTextOffset} />
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
            {isDiscMine ? (
              <>
                <Link to="/discform" state={{ disc, isEditForm: true }}>
                  <St.DiscButton theme={theme}>Edit</St.DiscButton>
                </Link>
                <St.DiscButton
                  theme={theme}
                  onClick={() => setIsDeleteModal(!isDeleteModal)}
                >
                  Delete
                </St.DiscButton>
              </>
            ) : (
              <>
                {isLoggedIn ? (
                  <St.DiscButton
                    theme={theme}
                    onClick={() => setIsBuyModal(!isBuyModal)}
                  >
                    Buy Now
                  </St.DiscButton>
                ) : (
                  <St.Link href="/login">
                    <St.DiscButton theme={theme}>Buy Now</St.DiscButton>
                  </St.Link>
                )}
              </>
            )}
          </St.ButtonDiv>
        </St.TextDiv>
      </St.DescriptionDiv>
      {isDeleteModal && (
        <St.DeleteModal theme={theme}>
          <St.ModalText>Are you sure you want to delete this?</St.ModalText>
          <St.ModalButtonDiv>
            <St.ModalButton
              theme={theme}
              onClick={() => handleDiscDelete(discId as string)}
            >
              Delete that shiz
            </St.ModalButton>
            <St.ModalButton
              theme={theme}
              onClick={() => setIsDeleteModal(false)}
            >
              Nooooooo
            </St.ModalButton>
          </St.ModalButtonDiv>
        </St.DeleteModal>
      )}
      {isBuyModal && (
        <St.BuyModal theme={theme}>
          <St.ModalText>
            To buy this disc, ninja some cash to the seller on Paypal.
          </St.ModalText>
          <St.ModalText>
            Send ${disc?.price} to pleasepayme@hyzer.ninja
          </St.ModalText>
        </St.BuyModal>
      )}
    </St.DiscDetailContainer>
  );
};

export default DiscDetailPage;
