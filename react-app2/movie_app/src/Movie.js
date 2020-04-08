import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';


function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Colums">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Colums">
                <h2>{title}</h2>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre} | </span>
    )
}

/*
class MoviePoster extends Component {

    static propTypes = {
        poster: propTypes.string.isRequired
    }

    render() {
        return (
            <img src={this.props.poster} alt="dkdk" />
        );
    }
}
*/
//축약 (render X, LifeCycles X)

Movie.propTypes= {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired
}

MoviePoster.prototype = {
    poster: propTypes.string.isRequired,
    alt: propTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: propTypes.string.isRequired
}


export default Movie;