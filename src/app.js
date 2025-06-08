import express from 'express';
import filmsRouter from './routes/films.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/films', filmsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});