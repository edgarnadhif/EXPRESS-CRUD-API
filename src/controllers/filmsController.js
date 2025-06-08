import fs from 'fs';
import path from 'path';

const filmsFile = path.resolve('src/data/films.json');

function readFilms() {
  const data = fs.readFileSync(filmsFile);
  return JSON.parse(data);
}

function writeFilms(data) {
  fs.writeFileSync(filmsFile, JSON.stringify(data, null, 2));
}

export function getAllFilms(req, res) {
  const films = readFilms();
  res.json(films);
}

export function getFilmById(req, res) {
  const films = readFilms();
  const film = films.find(f => f.id === req.params.id);
  if (!film) return res.status(404).json({ message: 'Film not found' });
  res.json(film);
}

export function addFilm(req, res) {
  const films = readFilms();
  const newFilm = req.body;
  films.push(newFilm);
  writeFilms(films);
  res.status(201).json(newFilm);
}

export function updateFilm(req, res) {
  const films = readFilms();
  const index = films.findIndex(f => f.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Film not found' });

  films[index] = { ...films[index], ...req.body };
  writeFilms(films);
  res.json(films[index]);
}

export function deleteFilm(req, res) {
  let films = readFilms();
  const index = films.findIndex(f => f.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Film not found' });

  const deleted = films.splice(index, 1);
  writeFilms(films);
  res.json(deleted[0]);
}
