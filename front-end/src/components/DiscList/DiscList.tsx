/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DiscCard from './DiscCard';
import { DiscListDiv } from './DiscList.styled';
import { fetchDiscs } from '../../actions/actionsIndex';
import { IDiscTypesDB } from '../../types/typesindex';

interface Props {
  userId: number;
}

const DiscList: React.FC<Props> = ({ userId }) => {
  const [discs, setDiscs] = useState<IDiscTypesDB[]>();

  useEffect(() => {
    fetchDiscs(userId).then((res) => setDiscs(res?.data));
  }, []);

  return (
    <DiscListDiv>
      {discs?.map((disc, i) => (
        <Link to={`/disc/${disc?.disc_id}`} key={i}>
          <DiscCard {...disc} />
        </Link>
      ))}
    </DiscListDiv>
  );
};

export default DiscList;
