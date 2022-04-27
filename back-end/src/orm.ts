import { MikroORM } from '@mikro-orm/core';
import { PROD } from './constants';
import { Disc } from './entities/Disc';

const main = async () => {
  const orm = await MikroORM.init({
    entities: [],
    dbName: 'hyzer-ninja',
    type: 'postgresql',
    debug: !PROD,
  });

  const disc = orm.em.create(Disc, { name: 'Destroyer' });
  await orm.em.persistAndFlush(disc);
};

main();
