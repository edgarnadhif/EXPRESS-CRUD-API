import express from 'express';
import {
  getAllFilms,
  getFilmById,
  addFilm,
  updateFilm,
  deleteFilm
} from '../controllers/filmsController.js';

const router = express.Router();

router.get('/', getAllFilms);
router.get('/:id', getFilmById);
router.post('/', addFilm);
router.put('/:id', updateFilm);
router.delete('/:id', deleteFilm);

export default router;
