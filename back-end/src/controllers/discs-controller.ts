import { Request, Response } from 'express';
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
