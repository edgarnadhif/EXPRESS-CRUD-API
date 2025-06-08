import request from 'supertest';
import express from 'express';
import filmsRouter from '../src/routes/films.js';

const app = express();
app.use(express.json());
app.use('/films', filmsRouter);

describe('Films API', () => {
  it('GET /films should return 200', async () => {
    const res = await request(app).get('/films');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
