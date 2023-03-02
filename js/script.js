"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalModieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalModieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalModieDB.count >= 10 && personalModieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalModieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalModieDB);
    }
}

showMyDb(personalModieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalModieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        
    }
}

writeYourGenres();