import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {
  HomeContainer,
  StyledHomeText,
  StyledGif,
  StyledSearchField,
  StyledTrendingTitleDiv,
  StyledTrendingTitle,
} from './Home.styled';
import BrandList from './BrandList';

const iconSize = 35;

const Home = () => (
  <HomeContainer>
    <StyledHomeText>
      The disc golf marketplace you never knew you needed.
    </StyledHomeText>
    <StyledGif src="/media/frolf.gif" />
    <StyledSearchField />
    <StyledTrendingTitleDiv>
      <TrendingUpIcon style={{ fontSize: iconSize }} />
      <StyledTrendingTitle>Trending Brands</StyledTrendingTitle>
    </StyledTrendingTitleDiv>
    <BrandList />
  </HomeContainer>
);

export default Home;
