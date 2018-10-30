import React, { Component } from 'react';
import './components.css';

class MovieDetail extends Component {
    render() {
        const movieId = this.props.match.params.id
        const movie = this.props.state.movies[movieId]
        return (
            <div id="movie-detail">
                <h2>{movie.title} ({movie.year})</h2>
                <img className="movie" src={movie.img} alt=""/>
                <p>{movie.descrShort}</p>
            </div>
        );
    }
}

export default MovieDetail;