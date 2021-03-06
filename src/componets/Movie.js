import React from 'react';
import PropTypes from 'prop-types';
// import './App.css';



const Movie = ({ year, title, summary, poster, genres}) => {
    return (
        
        <div className="movie">

           <img className="movie_poster" src={poster} alt={title} />
            
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">{genres.map( (genre, index) => <li className="genre" key={index}>
                    {genre}
                </li>)}</ul>

                <p className="movie_summary">{summary.slice(0, 140)}...</p>
            </div>
        </div>
        
    )
};


Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

};



export default Movie;
