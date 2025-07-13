import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;
const host = process.env.HOST;

const app = express();

app.listen(port, () => {
  console.log(`server running on http://${host}:${port}/`)
});
