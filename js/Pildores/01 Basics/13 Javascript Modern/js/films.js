// Exercise 1: Get the array of all directors.
function getAllDirectors() {
  /*   let result = peliculas.map(movie => {
      return movie.director;
    });
    console.table(result);

    let result2 =  peliculas.forEach(movie => {      
      return movie.director
    })
    console.table(result2); */

  //return result;

  result = movies.map(function director(movie, item) {
    return movie.director
  })
  console.table(result);



}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const films = array.filter(movie => movie.director == director);
  console.table(films);
  return films;
}

function moviesAverage(films) {
  // acumulem a la variable score = la puntuacio de cada pelicula
  // a la variable contador anem guardant el que anem sumant ... en aquest cas film.score
  // El 0 serveix per incialitzar la variable contador = 0
  let scoreReal;

  const scores = films.reduce((contador, film) => {
    //Aquesta condició la podriem fer per validar que tinguem dades a score
    /*  if ((film.score == null) | (film.score == "") | isNaN(film.score)) {
       scoreReal = 5
     } else {
       scoreReal = film.score
     } */
    console.log("film: " + film.title + " Score: " + film.score + " sumatori score: " + (contador + film.score));
    return contador + film.score;
  }, 0);

  // Calculem la mitja... deixem a dos decimals
  const mitja = parseFloat(scores / parseInt(films.length)).toFixed(2);
  console.log("-----------------------------");
  console.log("Total Scores " + parseFloat(scores.toFixed(2)) + " Numero pelis " + films.length);
  console.log("Mitja Scores: " + mitja);
  return mitja;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(director) {

  // Filtrem totes les pelis del Director seleccionat
  const filmsBydirector = movies.filter(movie => movie.director == director);
  console.log("Director: " + director);
  console.log(filmsBydirector);

  const scores = filmsBydirector.reduce((contador, filmsBydirector) => {
    console.log("film: " + filmsBydirector.title + " Score: " + filmsBydirector.score + " sumatori score: " + (contador + filmsBydirector.score));
    return contador + filmsBydirector.score;
  }, 0);

  // Calculem la mitja... deixem a dos decimals
  const mitja = parseFloat(scores / parseInt(filmsBydirector.length)).toFixed(2);
  console.log("-----------------------------");
  console.log("Total Scores " + parseFloat(scores.toFixed(2)) + " Numero pelis " + filmsBydirector.length);
  console.log("Mitja Scores: " + mitja);
  return mitja;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  // Endreçem amb Javascript modern
  //array.sort((a, b) => a.title < b.title ? -1 : 1);

  // Endreçem amb JAvascript classic
  movies.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  const vintPrimers = movies.slice(0, 20);
  console.table(vintPrimers)
  return vintPrimers;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  // Primer ho endreçem per titol pq així quedarà endreçat alfabeticament. 
  // JAvascript modern
  /* array.sort((a, b) => a.title < b.title ? -1 : 1); */

  // JAvascript classic
  array.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });


  // ara ho endreçem per any
  // JAvascript modern
  // Si tractessim l'any com a string, ho podem fer comparant una cadena amb l'altra
  array.sort((a, b) => a.year < b.year ? -1 : 1);

  // Si tractessim l'any com a número podriem ordenar restant
  //result.sort((a, b) =>  a.title - b.title  );

  // JAvascript classic
  /* result.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }); */

  const vintPrimers = array.slice(0, 240);
  console.table(vintPrimers);
  return vintPrimers;
}

// Exercise 6: Get the best film of a year
function bestFilmOfYear(array, year) {

  // Filtro per any
  let films = array.filter(movie => movie.year == year);

  const millorPeli = films.reduce(function (prev, current) {
    return (prev.score > current.score ? prev : current)
  })

  // Millor peli del any
  console.log(millorPeli)
  return millorPeli;
}