import { createPool } from "mysql2";
import dotenv from 'dotenv';
dotenv.config();

const db_name = process.env.DB_NAME;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;

const pool = createPool({
 // connection objects
 host: db_host,
 user: db_user,
 password: db_password,
 database: db_name,
});

pool.query(`select * from users`, (err, res) => {
  return console.log(res);
});

