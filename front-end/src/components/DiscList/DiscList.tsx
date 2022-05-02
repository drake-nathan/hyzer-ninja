import { Link } from 'react-router-dom';
import DiscCard from './DiscCard';
import { DiscListDiv } from './DiscList.styled';
import { discs } from '../../content/discs';

const DiscList = () => (
  <DiscListDiv>
    {discs.map((disc, i) => (
      <Link to={`/disc/${disc._id}`} key={i}>
        <DiscCard {...disc} />
      </Link>
    ))}
  </DiscListDiv>
);

export default DiscList;
