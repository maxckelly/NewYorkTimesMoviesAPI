
let input = document.getElementById("search-movies");
const movies = document.querySelector(".movies")

const httpRequest = axios.create({
  baseURL: `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${input.value}&api-key=xIWGFzxCIlvycOEDzOPJcriGp2MwnoB4`,
});

input.addEventListener('input', (event) => {
  
  if (movies.children) {
    movies.innerHTML = null
  }

  axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${input.value}&api-key=xIWGFzxCIlvycOEDzOPJcriGp2MwnoB4`).then((response) => {
    console.log(response);
    let movieData = response.data.results

    movieData.forEach((movie) => {
    
      let movieTitle = document.createElement('h3');
      let movieDescription = document.createElement('p');
      movieTitle.innerHTML += movie.display_title;
      movieDescription.innerHTML += movie.headline;
      document.querySelector('.movies').appendChild(movieTitle);
      document.querySelector('.movies').appendChild(movieDescription);

      // let movieHeadLine = document.createElement('p');
      // movieHeadLine.innerHTML += movie.headline;
      // document.querySelector('.movie-description').appendChild(movieHeadLine);
    }) 
  });
});