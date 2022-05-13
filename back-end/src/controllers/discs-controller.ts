import { Request, Response } from 'express';
import { pool } from '../dbconfig/db-connector';

export const getDiscs = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    console.log('pool connected successfully');

    const sql = 'SELECT * FROM discs';
    const { rows } = await client.query(sql);
    const discs = rows;

    client.release();

    res.send(discs);
  } catch (err) {
    res.status(400).send(err);
  }
};
