import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.get('/health', (req: Request, res: Response) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Backend is running on port: ${PORT}`);
});
