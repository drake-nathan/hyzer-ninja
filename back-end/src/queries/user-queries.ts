/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Request, Response } from 'express';
import { pool } from '../dbconfig/db-connector';

interface UserTypes {
  username: string;
  email: string;
  paypal: string;
  password: string;
  imageUrl: string;
}

interface GetUserRequest extends Request {
  body: {
    username: string;
  };
}

export const getUser = async (req: GetUserRequest, res: Response) => {
  try {
    const client = await pool.connect();
    const { username } = req.body;

    const sql = `
      SELECT * FROM users
      WHERE username = ${username};
    `;
    const { rows } = await client.query(sql);

    client.release();

    res.send(rows);
  } catch (err) {
    res.status(400).send(err);
  }
};

interface AddUserRequest extends Request {
  body: UserTypes;
}

export const addUser = async (req: AddUserRequest, res: Response) => {
  try {
    const client = await pool.connect();
    const user = req.body;

    const sql = `
      INSERT INTO users (username, email, paypal, password, image_url)
      VALUES ('${user.username}', 
        '${user.email}', 
        '${user.paypal}', 
        '${user.password}', 
        '${user.imageUrl}')
      RETURNING user_id;
    `;

    const { rows } = await client.query(sql);

    client.release();

    res.send(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
};
