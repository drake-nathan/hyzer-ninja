import { Link } from 'react-router-dom';
import {
  StyledBrandListContainer,
  StyledBrandListUl,
  StyledBrandListItem,
  StyledBrandImgDiv,
  StyledBrandListImg,
  StyledBrandText,
} from './BrandList.styled';
import { brands } from '../../content/brands';

const BrandList = () => {
  const defaultImg = '/favpng_ninja-icon.png';

  return (
    <StyledBrandListContainer>
      <StyledBrandListUl>
        {brands.map((brand, i) => (
          <Link to={brand.internalLink} key={i}>
            <StyledBrandListItem>
              <StyledBrandImgDiv>
                <StyledBrandListImg
                  src={brand.image || defaultImg}
                  className="svg-color"
                />
              </StyledBrandImgDiv>
              <StyledBrandText>{brand.name}</StyledBrandText>
            </StyledBrandListItem>
          </Link>
        ))}
      </StyledBrandListUl>
    </StyledBrandListContainer>
  );
};

export default BrandList;
