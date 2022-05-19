import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // host: 'localhost',
  // database: 'hyzer-ninja',
  // port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
});
