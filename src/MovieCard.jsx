import React from 'react';

const MovieCard = (props) => {
    return(
        <div className='indi-movie movie' onClick={() => {props.function(props.movie.imdbID)}}>
          <div className='movie' >
          <img className='movie' src={props.movie.Poster !== 'N/A' ? props.movie.Poster : 'https://via.placeholder.com/200x286.png?text=%20No%20Poster'} alt={props.movie.title} /> 
          </div>
          <div className='movie'>
            <div className='movie title'>
              {props.movie.Title}
            </div>
            <div className="year">
              {props.movie.Year}
            </div>
            <div className="type">
            {props.movie.Type} 
            </div>
          </div>           
        </div>
    );
}

export default MovieCard;