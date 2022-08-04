import {movies} from './movies.js'

//SELECTORS 
const movieUl = document.querySelector('#movies-ul');
const radioBtns = document.getElementsByName('film-filter');

// LOOP: Radio Buttons
for (var i = 0; i < radioBtns.length; i++){
  radioBtns[i].addEventListener("change", filterMovies);
};

//FUNCTION: Add movies to DOM
const addMoviesToDom = (m) => {
  movieUl.innerHTML = "";
  m.map(movie => {
    let newLi = document.createElement('li');
    newLi.setAttribute("class", "movies-item");
    let a = document.createElement('a');
    a.href = "https://www.imdb.com/title/" + movie.imdbID;
    let img = document.createElement('img');
    img.src = movie.poster;
    movieUl.appendChild(newLi);
    newLi.appendChild(a);
    a.appendChild(img);
  })
}
addMoviesToDom(movies);


// //FUNCTION: Filter movies
function filterMovies (wordInMovie){ 
 var value = wordInMovie.target.value;
 console.log(value);
 var newList = [];
 switch (value) {
   case "film-avenger": 
    newList = movies.filter(m => {
      return m.title.toLowerCase().includes("avenger");
    });
    break; 
   case "film-xmen":
     newList = movies.filter(m => {
       return m.title.toLowerCase().includes("x-men");
     });
     break;
    case "film-princess":
      newList = movies.filter(m => {
      return m.title.toLowerCase().includes("princess");
      })
      break;
    case "film-batman": 
      newList = movies.filter(m => {
        return m.title.toLowerCase().includes("batman");
      })
      break;
    case "film-new":
      newList = movies.filter(m => {
        return m.year >= 2014;
      })
 }
 addMoviesToDom(newList);
}
