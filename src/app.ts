import express from 'express';
import dotenv from 'dotenv';
import eventRoutes from './routes/eventRoutes';
import { connectDB } from './config/db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/events', eventRoutes);

app.get('/', (_, res) => {
  res.send('Event Planner API is running');
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
