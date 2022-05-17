/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Request, Response } from 'express';
import { DiscTypes } from '../types/typesIndex';
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
  body: DiscTypes;
}

export const addDisc = async (req: DiscRequest, res: Response) => {
  try {
    const client = await pool.connect();
    const disc = req.body;

    const sql = `
      INSERT INTO discs (title, brand, type, mold, base_plastic, sub_plastic, run, condition, price, image_url)
      VALUES ('${disc.title}', '${disc.brand}', '${disc.type}', '${disc.mold}', 
        '${disc.basePlastic}', '${disc.subPlastic || undefined}', 
        '${disc.run || undefined}', ${disc.condition}, ${disc.price}, 
        '${disc.imageUrl}');
    `;

    await client.query(sql);

    client.release();

    res.send('Disc added successfully.');
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
};
