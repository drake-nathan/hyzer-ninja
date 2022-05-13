import { Pool } from 'pg';

export const pool = new Pool({
  host: 'localhost',
  database: 'hyzer-ninja',
  port: 5432,
  max: 20,
  // connectionString: process.env.DATABASE_URL,
  idleTimeoutMillis: 30000,
});
