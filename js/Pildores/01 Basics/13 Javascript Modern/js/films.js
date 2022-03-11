// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = [];
  result = array.map(movie => { 
    return movie.director;
  });
  console.table(result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const films = array.filter(movie => movie.director == director);
  console.table(films);
  return films;
}

function moviesAverage(films) {
  // acumulem a la variable score = la puntuacio de cada pelicula
  // a la varaible contador anem guardant el que anem sumant ... en aquest cas film.score
  // El 0 serveix per incialitzar la variable contador = 0
  let scoreReal;

  const scores = films.reduce((contador, film) => {
    if ((film.score == null) | (film.score == "") | isNaN(film.score)) {
      scoreReal = 5
    } else {
      scoreReal = film.score
    }
    console.log("film: " + film.title + " Score: " + scoreReal + " sumatori score: " + (parseFloat(contador) + parseFloat(scoreReal)));
    return contador + scoreReal;
  }, 0);

  // Calculem la mitja... deixem a dos decimals
  const mitja = (scores / parseInt(films.length)).toFixed(2);
  console.log("-----------------------------");
  console.log("Total Scores " + scores + " Numero pelis " + films.length);
  console.log("Mitja Scores: " + mitja);
  return parseFloat(mitja);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  // Filtrem totes les pelis del Director seleccionat
  const films = array.filter(movie => movie.director == director);
  console.log("Director: " + director);
  return parseFloat(moviesAverage(films));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = [];

  result = array.map(movie => {    
    return movie.title;
  });
  console.table(result);

  result.sort();
  const vintPrimers = result.slice(0, 20);
  return vintPrimers;

}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [];

  result = array.map(movie => ({
    year: movie.year,
    title: movie.title
  }
  ));

  // Primer ho endreçem per titol pq així quedarà endreçat alfabeticament. 
  result.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0);
  // ara ho endreçem per any
  result.sort((a, b) => a.year - b.year);
  
  const vintPrimers = result.slice(0, 20);
  console.table(vintPrimers);
  return vintPrimers;
}

// Exercise 6: Get the best film of a year
function bestFilmOfYear(array, year) {
  if (array.length === 0) return undefined;
  if (year === undefined) return 'Undefined value!'

  // Filtro per any
  let films = array.filter(movie => movie.year == year);

  // endreço per score   
  let arrayMillorPeli = [];
  
  const millorPeli= films.reduce(function (prev, current) {
    return (prev.score > current.score ? prev : current)
  }) 

  
  // Millor peli del any
  //console.log("Millor peli del any " + year + "-> " + millorPeli.title + " --> puntuació: " + millorPeli.score);
  arrayMillorPeli.push(millorPeli)
  console.log(year)
  console.table(arrayMillorPeli) 
  return arrayMillorPeli;
}
