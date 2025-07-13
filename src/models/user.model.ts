import { pool } from "../config/db";
import { RowDataPacket } from "mysql2";

export interface User extends RowDataPacket {
  id: number;
  username: string;
  password: string;
}

export const getAllUsers = async (): Promise<User[]> => {
  const [rows] = await pool.query<User[]>("SELECT * FROM users");
  return rows;
} 

export const getUserById = async (id: number): Promise<User | undefined> => {
  const [rows] = await pool.query<User[]>(`SELECT * FROM user WHERE id = ${id}`);
  // const rows2 = await pool.query<User[]>("SELECT * FROM user WHERE id = ?", [id]);
  return rows[0];
} 