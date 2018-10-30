import React, { Component } from 'react';
import './components.css';
import Movie from './Movie';

class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            budget: (parseInt(localStorage.getItem('budget')) || 10),
            search: '',
            searchResult: []
        }
    }

    componentWillMount = () => {
        localStorage.clear()
    }

    componentWillUnmount = () => {
        localStorage.setItem('budget', this.state.budget)
    }

    search = (e) => {
        if (e.target.value === '') this.setState({ search: e.target.value, searchResult: [] })
        else {
            let searchResult = this.props.state.movies.filter(m => m.title.toLowerCase().includes(e.target.value.toLowerCase()))
            this.setState({ search: e.target.value, searchResult: searchResult })
        }
    }

    updateBudget = (isReturning, id) => {
        if (isReturning) {
            this.setState({ budget: this.state.budget + 3 })
            this.props.rent(id)
        } else if (this.state.budget >= 3) {
            this.setState({ budget: this.state.budget - 3 })
            this.props.rent(id)
        } else alert(`You don't have enough money! :(\nUn-rent another movie and try again.`)
    }

    hasRented = () => this.props.state.movies.some(m => m.isRented)

    displayRented = (movies) => {
        return (
            <div>
                <div>
                    <h2>Rented:</h2>
                    <div class="movies-container">
                        {movies.filter(m => m.isRented).map(m => <Movie movie={m} updateBudget={this.updateBudget} />)}
                    </div>
                </div>
                {this.displayAll(movies)}
            </div>
        );
    }

    displayAll = (movies) => {
        return (
            <div>
                <h2>Catalog:</h2>
                <div class="movies-container">
                    {movies.map(m => <Movie movie={m} updateBudget={this.updateBudget} />)}
                </div>
            </div>
        );
    }

    display = () => {
        if (this.state.searchResult.length > 0) {
            if (this.hasRented()) {
                return this.displayRented(this.state.searchResult)
            }
            return this.displayAll(this.state.searchResult)
        } else {
            if (this.hasRented()) {
                return this.displayRented(this.props.state.movies)
            }
            return this.displayAll(this.props.state.movies)
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="search" value={this.state.search} onChange={this.search}></input>
                <span id="budget">Budget: ${this.state.budget}.00</span>

                {this.display()}

            </div>
        );
    }
}

export default Catalog;