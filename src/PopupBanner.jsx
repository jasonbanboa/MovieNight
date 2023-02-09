import React from "react";
import { useState } from 'react';


const PopupBanner = ({ movie }) => {

    // state for (more details button)
    const [visibility, setVisibility] = useState(false);

    // switches states 
    const handleClick = () => {
        if (visibility) {
            setVisibility(false);
        } else { setVisibility(true) }
    }

    return (
   
        <div id="popup-banner" className="zpopup">
          <div className="movie-details zpopup">
            <div className="close-container zpopup">
              <div className="leftright"></div>
              <div className="rightleft"></div>
              <label className="close">close</label>
            </div>
            <h2 className="logo">MovieNight</h2>
            <a className="zpopup button-86" href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noreferrer">Offical imdb site</a>
          <div className="zpopup title" id="data-title">{movie.Title} <span className="zpopup icon">&#9733; {movie.imdbRating}</span> </div>
          <div className="zpopup data-stats">
            {movie.Year} | {movie.Runtime} | {movie.Rated}
          </div>
            <div className="zpopup content">
              <div className="zpopup" id="categories">{movie.Genre}</div>
              <div className="zpopup" id="content">{movie.Plot}</div>
            </div>
            <div className="zpopup footer">
              <div className="zpopup staring">{movie.Actors}</div>
            </div>
          <div className="zpopup more-stats"><span className="zpopup toggle-stats" onClick={() => handleClick()}>{visibility ? "Close Stats" : "See More Stats"}</span>
              {
                visibility ? <div className="zpopup ul">
                              <div className="zpopup li"><div className="zpopup key">Director</div><div className="zpopup value">{movie.Director}</div></div>
                              <div className="zpopup li"><div className="zpopup key">Released</div><div className="zpopup value">{movie.Released}</div></div>
                              <div className="zpopup li"><div className="zpopup key">Writer</div><div className="zpopup value">{movie.Writer}</div></div>
                              <div className="zpopup li"><div className="zpopup key">Awards</div><div className="zpopup value">{movie.Awards}</div></div>
                              <div className="zpopup li"><div className="zpopup key">Box Office</div><div className="zpopup value">{movie.BoxOffice}</div></div>
                              <div className="zpopup li"><div className="zpopup key">Language</div><div className="zpopup value">{movie.Language}</div></div>
                            </div> : <></>
              }
            </div>
          </div>
          <div className="zpopup screen">
            <img className="zpopup" src={movie.Poster} alt={movie.Title} />
          </div>
        </div>
        
    );
}

export default PopupBanner; 