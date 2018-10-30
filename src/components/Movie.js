import React, { Component } from 'react';
import './components.css';
import { Link } from 'react-router-dom';
import MovieDetail from './MovieDetail';

class Movie extends Component {
    rent = () => {
        this.props.updateBudget(this.props.movie.isRented, this.props.movie.id);
    }

    render() {
        const movie = this.props.movie
        return (
            <div className="movie-img">
                <Link to={`../movies/${movie.id}`} render={({ match }) => <MovieDetail match={match} movie={movie}/>}>
                    <img className="movie" src={movie.img} alt="" />
                </Link>
                {movie.isRented ? <div className="rent" onClick={this.rent}>-</div> : <div className="rent" onClick={this.rent}>+</div> }
            </div>
        );
    }
}

export default Movie;