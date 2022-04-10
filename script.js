const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	ganre: [],
	private: false
}

const a = prompt('Last film?', ''),
			b = prompt('rating?', ''),
			c = prompt('Last film?', ''),
			d = prompt('rating?', '')

personalMoviesDB[a] = b
personalMoviesDB[c] = d
console.log(personalMoviesDB)
