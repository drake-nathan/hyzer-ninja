/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Request, Response } from 'express';
import { discs } from '../dummy-data/discs';
import { pool } from './db-connector';

const setupDevDb = async (req: Request, res: Response) => {
  const createDiscTable = `
    CREATE TABLE "discs" (
      disc_id integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
      title varchar,
      brand varchar,
      type varchar,
      mold varchar,
      base_plastic varchar,
      sub_plastic varchar,
      run varchar,
      condition integer,
      price money,
      image_url varchar
    );
  `;

  await pool.query(createDiscTable).catch((err) => {
    console.error(err);
  });

  const populateDiscTable = `
    INSERT INTO "discs" (title, brand, type, mold, base_plastic, sub_plastic, run, condition, price, image_url)
      VALUES ${discs.map(
        (disc) =>
          `(${disc.title}, ${disc.brand}, ${disc.type}, ${disc.mold}, ${disc.basePlastic}, ${disc.subPlastic}, ${disc.run}, ${disc.condition}, ${disc.price}, ${disc.image})`
      )};
  `;

  await pool.query(populateDiscTable).catch((err) => {
    console.error(err);
  });

  res.send('you are so populated');
};

export default setupDevDb;
