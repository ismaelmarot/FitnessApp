import express from 'express';
import { prisma } from './prisma';

const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
  res.json(await prisma.user.findMany());
});

app.listen(3001, () => console.log("Server running"));
