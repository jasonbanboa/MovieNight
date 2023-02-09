import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import PopupBanner from './PopupBanner';


function App() {

  // state for multiple movies
  const [movies, setMovies] = useState([]);

  // state for a single movie 
  const [movieDetail, setMovieDetail] = useState([]);

  // state for input
  const [searchTerm, setSearchTerm] = useState('');

  // visibility state for popup banner
  const [visibility, setVisibility] = useState(false);

  // if clicked off banner switches visibility to off thus hiding the banner
  document.addEventListener("click", (event) => {
    const container = document.getElementById('movie-container')
    if (!event.target.classList.contains('zpopup' || !event.target.id === "popup-banner") && !event.target.classList.contains('movie')){
        container.style.opacity = 1;
        setVisibility(false);
    } else {
      setVisibility(true);
      container.style.opacity = 0.4;
    }
  });

  // function for handling input submits
  const handleKeyPress = (event) => {
    // returns if searchTerm is empty string return false
    if (searchTerm === '' ) { 
      return false; 
    };
    // if enter is pressed ...
    if (event.key === 'Enter') {
      searchMovies(searchTerm);
      setSearchTerm('');
    }
  }

  // vhen a individual movie card is clicked opens a popup banner 
  const movieClick = (movie_id) => {
    // fetch data and updates the data in the popup banner
    fetchMovieDetail(movie_id);
    
  }

  // function for getting  mulitple movies with similar titles
  const searchMovies = async (title) => {
    console.log(title);
    const options = {
      method: 'GET',
      url: 'https://moviesdb5.p.rapidapi.com/om',
      params: { s: title },
      headers: {
        'X-RapidAPI-Key': '{YOUR_API_KEY}',
        'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
      }

    };
    const response = await axios.request(options)
      .catch(error => console.log(error));
    setMovies(response.data.Search);
    console.log(movies);
  }

  // get details of a single movie
  const fetchMovieDetail = async (movie_id) => {
    const options = {
      method: 'GET',
      url: 'https://moviesdb5.p.rapidapi.com/om',
      params: { i: movie_id },
      headers: {
        'X-RapidAPI-Key': '{YOUR_API_KEY}',
        'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
      }
    };

    const response = await axios.request(options)
      .catch(error => console.log(error));
    setMovieDetail(response.data);
    
  }
  
  useEffect(() => {
    searchMovies('batman');
  }, []);

  return (
    <div className="App" id="main-container"> 
      <header className="search">
        { visibility ? <></> : <h1 className='logo'>MovieNight</h1>}

        <input
          placeholder='Movie for tonight?'
          value={searchTerm}
          onChange={((event) => setSearchTerm(event.target.value))}
          onKeyPress={handleKeyPress}
        />
      </header>
      {
        visibility ? <PopupBanner movie={movieDetail} /> : <></>
      }
      
      <main id='movie-container' style={{ opacity: 0.5 }}>
        { 
          movies?.length > 0
            ? (
              <>
                {movies.map((movie) => (
                  <MovieCard movie={movie} function={movieClick} key={movie.imdbID}/>
                ))}
              </>
            ) : (
              <div className="container">
                <h2>No movies found</h2>
              </div>
            )
        }
      </main>
    </div>
  );
}

export default App;
