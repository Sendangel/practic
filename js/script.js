"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');

const personalModieDB = {
    'count': numberOfFilms,
    'movies': {
    },
    'actors': {},
    'genres': [],
    'privat': false,
};

const a = prompt('Один из последних просмотренных фильмов?', 'logan'),
      b = +prompt('На сколько оцените его?', '5'),
      c = prompt('Один из последних просмотренных фильмов?', 'galaxy'),
      d = +prompt('На сколько оцените его?', '6');

personalModieDB.movies[a] = b;
personalModieDB.movies[c] = d;

console.log(personalModieDB);
