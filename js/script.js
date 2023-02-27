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

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', 'logan'),
          b = +prompt('На сколько оцените его?', '5');

    if (a != null && b != null && a != '' && b != '' && a.length <50) {
        personalModieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalModieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalModieDB.count >= 10 && personalModieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalModieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalModieDB);
