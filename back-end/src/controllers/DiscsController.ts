import { Request, Response } from 'express';
import { pool } from '../dbconfig/dbconnector';

class DiscsController {
  static async get(req: Request, res: Response) {
    try {
      const client = await pool.connect();

      const sql = 'SELECT * FROM discs';
      const { rows } = await client.query(sql);
      const discs = rows;

      client.release();

      res.send(discs);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

export default DiscsController;
