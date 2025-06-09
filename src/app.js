// import express from 'express';
// import filmsRouter from './routes/films.js';

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use('/films', filmsRouter);

// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

import express from 'express';
import filmsRouter from './routes/films.js';

const app = express();
app.use(express.json()); // Untuk parsing body request
app.use('/films', filmsRouter); // Gunakan router

export default app; // ⚠️ Ekspor sebagai handler