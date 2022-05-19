/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Request, Response } from 'express';
import { IDiscTypesJS } from '../types/typesIndex';
import { pool } from '../dbconfig/db-connector';

export const getDiscs = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();

    const sql = 'SELECT * FROM discs';
    const { rows } = await client.query(sql);

    client.release();

    res.send(rows);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const getSingleDisc = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const discId = req.params.id;

    const sql = `
      SELECT *
      FROM discs
      WHERE disc_id = ${discId};
    `;
    const { rows } = await client.query(sql);

    client.release();

    res.send(rows[0]);
  } catch (err) {
    res.status(400).send(err);
  }
};

interface DiscRequest extends Request {
  body: IDiscTypesJS;
}

export const addDisc = async (req: DiscRequest, res: Response) => {
  try {
    const client = await pool.connect();
    const disc = req.body;

    const sql = `
      INSERT INTO discs (title, brand, type, mold, base_plastic, sub_plastic, run, condition, price, image_url, user_id)
      VALUES ('${disc.title}', '${disc.brand}', '${disc.type}', '${disc.mold}', 
        '${disc.basePlastic}', '${disc.subPlastic || undefined}', 
        '${disc.run || undefined}', ${disc.condition}, ${disc.price}, 
        '${disc.imageUrl}', ${disc.userId})
      RETURNING disc_id;
    `;

    const { rows } = await client.query(sql);

    client.release();

    res.send(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
};

export const deleteDisc = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const discId = req.params.id;

    const sql = `
      DELETE FROM discs
      WHERE disc_id = ${discId};
    `;

    await client.query(sql);

    client.release();

    res.send('Disc deleted successfully.');
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
};

export const updateDisc = async (req: DiscRequest, res: Response) => {
  try {
    const client = await pool.connect();
    const discId = req.params.id;
    const disc = req.body;

    const sql = `
      UPDATE discs 
      SET title = '${disc.title}', 
        brand = '${disc.brand}', 
        type = '${disc.type}', 
        mold = '${disc.mold}', 
        base_plastic = '${disc.basePlastic}', 
        sub_plastic = '${disc.subPlastic || undefined}', 
        run = '${disc.run || undefined}', 
        condition = ${disc.condition}, 
        price = ${disc.price}, 
        image_url = '${disc.imageUrl}'    
      WHERE disc_id = ${discId}
      RETURNING *;
    `;

    const { rows } = await client.query(sql);

    client.release();

    res.send(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
};
