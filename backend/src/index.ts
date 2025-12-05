import express from 'express';
import { prisma } from './prisma';

const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});
